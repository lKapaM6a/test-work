import React, {FC} from 'react'
import {Link} from "react-router-dom"
import {LazyLoadImage} from "react-lazy-load-image-component";
import {publicUrl} from '../../../../helpers/PublicUrl.helper';
import styles from './footerLogo.module.scss'

interface Props {
  logoLink?: boolean
}

export const FooterLogo: FC<Props> = props => {
  const {logoLink} = props
  const logo = publicUrl('/img/logo-not-border.svg')

  return (
    <div className={styles.logo}>
      {logoLink ? (
        <Link to={''}>
          <LazyLoadImage src={logo}
                         alt='Kibernetiki'
                         effect="blur"
          />
        </Link>
      ) : (
        <LazyLoadImage src={logo}
                       alt='Kibernetiki'
                       effect="blur"
        />
      )}
    </div>
  )
}

