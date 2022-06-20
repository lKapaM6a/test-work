import React, {FC, useCallback, useEffect, useRef, useState} from 'react'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {ReactComponent as Arrow} from './icons/arrow.svg'
import {ReactComponent as ShowAllArrow} from './icons/show-all-icon.svg'
import {ReactComponent as ShowMoreArrow} from "./icons/show-more-arrow.svg"
import {ReactComponent as CatalogIcon} from './icons/catalog.svg'
import {ReactComponent as CatalogClose} from './icons/catalog-close.svg'
import {CatalogItem} from "../../interfaces/CatalogMenu"
import {ReactComponent as BackStepIcon} from './icons/back-step.svg'
import styles from './catalogMenu.module.scss'

//layout data menu
import {catalog} from './catalog-menu-layout'

interface Props {
  isFixed?: boolean
  positionHeader?: any
}

export const CatalogMenu: FC<Props> = props => {
  const {isFixed, positionHeader} = props
  const {t} = useTranslation('translation', {keyPrefix: 'catalog'});

  const [height, setHeight] = useState(0)
  const maxHeight = 419
  const scrollableRef: any = useRef(null)

  const [isShown, setIsShown] = useState(false);
  const [siteCatalog, setSiteCatalog] = useState(catalog);

  useEffect(() => {
    setHeight(scrollableRef.current.scrollHeight)
  }, [])

  const body = document.body

  if (isShown) {
    body.removeAttribute('visible-menu')
  }

  const hideMenu = useCallback(() => {
    body.removeAttribute('visible-menu')
  }, [body])

  const [isMobile, setIsMobile] = useState(false)
  const mobileView = 1220

  const mobileDetect = useCallback(() => {
    if (window.innerWidth < mobileView && !isMobile) {
      setIsMobile(true)
      return
    }
    if (window.innerWidth >= mobileView && isMobile) {
      setIsMobile(false)
    }
  }, [isMobile])

  useEffect(() => {
    window.addEventListener('resize', mobileDetect)
    mobileDetect()
    return () => {
      window.removeEventListener('resize', mobileDetect)
    }
  })

  const columnCount = 3;

  const countShowMore = !isMobile ? 5 : 13;

  const getSubMenu = (currentItem: CatalogItem) => {
    const columns: any = []
    for (let i = 1; i <= columnCount; i++) {
      let col: any = currentItem?.children?.filter(item => item.column === i);

      if (col && col.length) {
        columns.push(
          <div className={styles.subMenu__column} key={i}>
            {col?.sort((a: { position: number }, b: { position: number }) => a.position - b.position).map((child: CatalogItem) => {
              return (
                <ul key={child.id}
                    className={`${styles.subMenu__item} ${child.isActive ? styles.active : ''}`}>
                  <div className={styles.subMenu__titleWrapper}
                       onClick={() => isMobile && child.children && (child.isActive = !child.isActive)}>
                    {child.url && (
                      <Link onClick={() => (isMobile && child.children && null)}
                            to={child.url}
                            className={`${styles.subMenu__title} ${styles.mobMenuLink}`}
                      >
                        <span>{child.label}</span>
                        {child.children && <Arrow className={styles.arrow}/>}
                      </Link>
                    )}
                  </div>

                  <ul className={styles.subMenu__lvl}>
                    {isMobile && (
                      <>
                        <div className={styles.backStep}
                             onClick={() => {
                               const catalog = siteCatalog.map(link => {
                                 if (link.isActive !== true) {
                                   return link
                                 } else {
                                   link.children?.forEach(linkChildren => linkChildren.isActive === true ? linkChildren.isActive = !linkChildren.isActive : link)
                                   return link
                                 }
                               })
                               if (catalog && child.children) {
                                 setSiteCatalog([...catalog])
                               }
                             }}>
                          <i className={styles.backStep__icon}>
                            <BackStepIcon/>
                          </i>

                          <span>
                            {child.label}
                          </span>
                        </div>

                        <Link className={styles.backStep__title}
                              to={child.url}>
                          <span className={styles.text}>{child.label}</span>
                        </Link>
                      </>
                    )}

                    {child?.children?.sort((a, b) => a.position - b.position).slice(0, countShowMore).map((item: CatalogItem) => {
                      return (
                        <li key={item.id}>
                          {item.url &&
                          <Link className={`${styles.subMenu__link} ${styles.mobMenuLink}`}
                                onClick={() => (isMobile && null)}
                                to={item.url}>
                            <span>
                              {item.label}
                            </span>
                          </Link>
                          }
                        </li>
                      )
                    })}

                    {child?.children && child.children.length > countShowMore && (
                      <div className={styles.subMenu__showAllWrapper}>
                        {child.url &&
                        <Link className={styles.subMenu__showAll}
                              to={child.url}>
                          <span>
                            {t('showAll')}
                            <ShowAllArrow className={styles.subMenu__showAllIcon}/>
                          </span>
                        </Link>
                        }
                      </div>
                    )}
                  </ul>
                </ul>
              )
            })
            }
          </div>
        )
      }
    }
    return columns
  }

  return (
    <>
      <div className={isFixed ? styles.fixed : ''}
           style={isFixed && !isMobile ? {
               maxHeight: `calc(100vh - ${positionHeader}px)`
             }
             :
             {
               maxHeight: ''
             }}>
        <div className={styles.relativeWrapper}>
          <div className={styles.wrapper}>
            <div className={styles.catalog__head} onClick={() => hideMenu()}>
              <div className={styles.catalog__headContent}>
                <CatalogIcon/>
                <span className={styles.catalog__headText}>
              {t('catalogProducts')}
            </span>
              </div>

              <CatalogClose className={styles.catalog__close}/>
            </div>

            <ul ref={scrollableRef} className={styles.scrollableWrapper}
                onMouseEnter={() => {
                  !isMobile && !isFixed && setIsShown(true)
                }}
                onMouseLeave={() => {
                  !isMobile && !isFixed && setIsShown(false)
                }}>
              {siteCatalog.sort((a, b) => a.position - b.position).map(item => (
                <li key={item.id}
                    className={`${styles.item} ${item.isActive ? styles.active : ''}`}>
                  {item.url &&
                  <div onClick={() => (isMobile && item.children && (item.isActive = !item.isActive))}>
                    <Link className={styles.itemLink}
                          onClick={() => (isMobile && item.children && null)}
                          to={item.url}>
                      <div className={styles.content}>
                        <div className={styles.itemContent}>
                          <i className={styles.icon}>
                            {item.icon}
                          </i>
                          <span className={styles.text}>{item.label}</span>
                        </div>

                        <div>
                          {item.children && <Arrow className={styles.arrow}/>}
                        </div>
                      </div>
                    </Link>
                  </div>
                  }

                  {item.children && (
                    <div key={item.id} className={styles.subMenu}>
                      {isMobile && (
                        <>
                          <div className={styles.backStep}
                               onClick={() => {
                                 setSiteCatalog([...siteCatalog.filter(link => link.id !== item.id), {
                                   ...item,
                                   isActive: !item.isActive
                                 }])
                               }}>
                            <i className={styles.backStep__icon}>
                              <BackStepIcon/>
                            </i>

                            <span>
                            {t('catalogProducts')}
                          </span>
                          </div>

                          <Link className={styles.backStep__title}
                                to={item.url}>
                            <span className={styles.text}>{item.label}</span>
                          </Link>
                        </>
                      )}
                      {getSubMenu(item)}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {maxHeight < height && (
              <div className={styles.showMore}>
                <ShowMoreArrow/>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`${styles.overlayMenu} ${isFixed ? styles.overlayFixed : ''} ${isShown && !isFixed ? styles.isActive : ''}`}
        onClick={() => hideMenu()}/>
    </>
  )
}
