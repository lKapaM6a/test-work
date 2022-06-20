import React, {FC, useEffect} from 'react'
import {publicUrl} from "../../../../helpers/PublicUrl.helper";
import styles from './headerSidebar.module.scss'
import {Sidebar} from "./components/Sidebar/Sidebar";

interface Props {
  logoLink?: boolean
  visibleSidebar?: boolean
  setVisibleSidebar?: (val: boolean) => void
}

export const HeaderSidebar: FC<Props> = props => {
  const {logoLink, visibleSidebar, setVisibleSidebar} = props

  const body = document.body

  useEffect(() => {
    if (visibleSidebar) {
      body.classList.add('no-scroll')
    } else {
      body.classList.remove('no-scroll')
    }
  }, [visibleSidebar])


  const burger = publicUrl('/img/header/burger.svg')

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.burger} unselectable`}
           onClick={() => setVisibleSidebar ? setVisibleSidebar(true) : null}>
        <img src={burger} alt='Open menu'/>
      </div>

      <Sidebar visibleSidebar={visibleSidebar}
               setVisibleSidebar={setVisibleSidebar} logoLink={logoLink}/>
    </div>
  )
}