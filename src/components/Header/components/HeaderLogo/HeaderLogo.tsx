import React, {FC} from 'react'
import {Link} from "react-router-dom"
import {publicUrl} from "../../../../helpers/PublicUrl.helper";
import styles from './headerLogo.module.scss'


interface Props {
  logoLink?: boolean
}

const logo = publicUrl('/img/logo.svg')

export const HeaderLogo: FC<Props> = props => {
  const {logoLink} = props

  return (
    <div className={styles.logo}>
      {logoLink ? (
        <Link to={''}>
          <img src={logo} alt="Kibernetiki"/>
        </Link>
      ) : (
        <img src={logo} alt="Kibernetiki"/>
      )}
    </div>
  )
}