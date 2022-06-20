import React, {FC} from 'react'
import {Link} from "react-router-dom";
import {useTranslation} from 'react-i18next';

import {publicUrl} from "../../../../helpers/PublicUrl.helper";

import styles from './headerBanner.module.scss'

interface Props {
  isVisible?: boolean
}

export const HeaderBanner: FC<Props> = props => {
  const {isVisible} = props
  const {t} = useTranslation('translation', {keyPrefix: 'promotionalBanner'});

  const bannerInfo = {
    image: publicUrl('/img/header/banner.png'),
    bgColor: '#28865B',
    url: '/'
  }

  return (
    <>
      {isVisible && (
        <div className={`${styles.banner} position-relative`}
             style={{
               backgroundImage: `url(${bannerInfo.image})`,
               backgroundColor: bannerInfo.bgColor
             }}>
          <div className={'container'}>

            <p className={styles.text} dangerouslySetInnerHTML={{__html: t('text')}}/>
          </div>

          <Link to={bannerInfo.url} className={'stretched-link'}/>
        </div>
      )}
    </>
  )
}