import React, {FC} from 'react'
import {LazyLoadImage} from "react-lazy-load-image-component";
import {publicUrl} from '../../../../helpers/PublicUrl.helper';
import styles from './companyLogo.module.scss'

interface Props {

}

export const CompanyLogo: FC<Props> = props => {
  const {} = props
  const logo = publicUrl('/img/bonum-logo.svg')

  return (
    <div className={styles.logo}>
      <a rel='noopener noreferrer' target='_blank' href='https://bonum-studio.com/'>
        <LazyLoadImage src={logo}
                       alt='Bonum'
                       effect="blur"/>
      </a>
    </div>
  )
}

