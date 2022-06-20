import React, {FC} from 'react'
import {Header} from '../Header/Header'
import {HeaderBanner} from "../Header/components/HeaderBanner/HeaderBanner";
import {Footer} from '../Footer/Footer'
import styles from './layout.module.scss'

interface Props {
  footer?: boolean,
  header?: boolean,
  logoLink?: boolean
}

export const Layout: FC<Props> = props => {
  const {
    children,
    header = true,
    footer = true,
    logoLink
  } = props

  return (
    <>
      <div className={styles.page}>
        <div className={styles.wrapper}>
          {/*Header banner*/}
          <HeaderBanner isVisible/>
          {header && (
            <Header logoLink={logoLink}/>
          )}

          <div>
            {children}
          </div>
        </div>

        {footer && <Footer/>}
      </div>
    </>
  )
}