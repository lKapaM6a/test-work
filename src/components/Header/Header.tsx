import React, {FC, useCallback, useEffect, useRef, useState} from 'react'
import {HeaderSidebar} from "./components/HeaderSidebar/HeaderSidebar";
import {HeaderLogo} from "./components/HeaderLogo/HeaderLogo";
import {HeaderCatalog} from "./components/HeaderCatalog/HeaderCatalog";
import {HeaderSearch} from "./components/HeaderSearch/HeaderSearch";
import {CatalogMenu} from "../CatalogMenu/CatalogMenu";
import {Lang} from "./components/Lang/Lang";
import {HeaderInteraction} from "./components/HeaderInteraction/HeaderInteraction";
import styles from './header.module.scss'

interface Props {
  logoLink?: boolean
}

export const Header: FC<Props> = props => {
  const {logoLink} = props
  const [visibleSidebar, setVisibleSidebar] = useState<boolean>(false)
  const body = document.body

  const [headerHeight, setHeaderHeight] = useState(0)

  const toggleMenu = useCallback(() => {
    body.toggleAttribute('visible-menu')
  }, [body])

  const headerRef = useRef<HTMLDivElement>(null);

  const getBoundingHeader = useCallback(() => {
    if (headerRef?.current?.scrollHeight) setHeaderHeight(headerRef?.current?.getBoundingClientRect().bottom)
  }, [headerRef])

  useEffect(() => {
    // TODO: Fix it
    setTimeout(() => {
      getBoundingHeader()
    }, 200)
    window.addEventListener("resize", getBoundingHeader);
    window.addEventListener("scroll", getBoundingHeader);
  }, [headerHeight]);

  return (
    <div className={styles.stickyHeader} ref={headerRef}>
      <header className={styles.header}>
        <div className={'container'}>
          <div className={styles.row}>
            <div className={styles.burger}>
              <HeaderSidebar visibleSidebar={visibleSidebar}
                             setVisibleSidebar={setVisibleSidebar}
                             logoLink={logoLink}/>
            </div>

            <div className={'d-none d-lg-block'}>
              <HeaderLogo logoLink={logoLink}/>
            </div>

            <div className={`${styles.catalog} d-none d-lg-block`}>
              <HeaderCatalog onClick={() => toggleMenu()}/>
            </div>

            <div className={styles.search}
                 onClick={() => getBoundingHeader()}>
              <HeaderSearch positionHeader={headerHeight}/>
            </div>

            <div className={`${styles.lang} d-none d-lg-block  d-xl-none d-xxl-block`}>
              <Lang light/>
            </div>

            <div className={styles.interaction}>
              <HeaderInteraction/>
            </div>
          </div>
        </div>
      </header>

      {/*Catalog menu header*/}
      <div className="container">
        <div className="position-relative">
          <CatalogMenu isFixed
                       positionHeader={headerHeight}/>
        </div>
      </div>
    </div>
  )
}