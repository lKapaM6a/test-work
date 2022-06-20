import React, {FC} from 'react'
import {publicUrl} from "../../../../../../helpers/PublicUrl.helper";
import {Menu} from "../Menu/Menu";
import styles from './sidebar.module.scss'
import {HeaderLogo} from "../../../HeaderLogo/HeaderLogo";


interface Props {
  logoLink?: boolean
  visibleSidebar?: boolean
  setVisibleSidebar?: (val: boolean) => void
}

export const Sidebar: FC<Props> = props => {
  const {logoLink, visibleSidebar, setVisibleSidebar} = props

  const closeSidebar = () => {
    if (setVisibleSidebar) {
      setVisibleSidebar(false)
    }
  }

  const closeMenu = publicUrl('/img/header/close.svg')

  return (
    <>
      <div className={`${styles.sidebar} ${visibleSidebar ? styles.visible : ''}`}>
        <div className={styles.header}>
          <HeaderLogo logoLink={logoLink}/>

          <div className={styles.close} onClick={() => closeSidebar()}>
            <img src={closeMenu} alt="Close menu"/>
          </div>
        </div>

        <div className={styles.body}>
          <Menu visibleSidebar={visibleSidebar}
                setVisibleSidebar={setVisibleSidebar}
          />
        </div>
      </div>

      <div className={`${styles.backdrop} ${visibleSidebar ? styles.visible : ''}`} onClick={() => closeSidebar()}/>
    </>
  )
}