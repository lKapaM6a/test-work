import React, {FC, useCallback, useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import styles from './cards.module.scss'

interface Props {
  content?: any
}

export const PromotionalCard: FC<Props> = props => {
  const {content} = props

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

  const srcImage = !isMobile ? content.img : content.imgMobile

  return (
    <div className={styles.promotional}>
      <Link className={styles.promotional__link} to={content.url} title={content.label}>
        <LazyLoadImage className={styles.promotional__pic}
                       src={srcImage}
                       alt={content.label}
                       effect="blur"/>
      </Link>
    </div>
  )
}