import React, {FC} from 'react'
import {Link} from "react-router-dom";
import {ReactComponent as Arrow} from "../WatchAll/icons/arrow.svg";
import styles from '../WatchAll/watchAll.module.scss'


interface Props {
  title: string,
  link: { url: string, linkText: string }
}

export const WatchAll: FC<Props> = props => {
  const {title, link} = props

  return (
    <div className={styles.wrapper}>
      <div className='title title--sm mb-lg-0'>{title}</div>
      <Link className={styles.wrapper__link} to={link.url}>
        <span>{link.linkText}</span>
        <Arrow className={styles.wrapper__arrow}/>
      </Link>
    </div>
  )
}

