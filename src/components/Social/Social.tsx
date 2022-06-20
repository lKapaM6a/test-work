import React, {FC} from 'react'
import styles from './social.module.scss'
import {useTranslation} from 'react-i18next';
import {ReactComponent as Instagram} from './icons/instagram.svg';
import {ReactComponent as TikTok} from './icons/tik-tok.svg';
import {ReactComponent as Facebook} from './icons/facebook.svg';

interface Props {
  light?: boolean
}

export const Social: FC<Props> = props => {
  const {light} = props
  const {t} = useTranslation('translation', {keyPrefix: 'social'});


  return (
    <div className={`${styles.wrapper} ${light ? styles.light : ''}`}>
      <div className={styles.title}>
        {t('social')}
      </div>
      <div className={styles.links}>
        {menu.map(item => (
          <div className={styles.link} key={item.id}>
            {item.icon}

            {item.url &&
            <a title={item.label} rel='noopener noreferrer' target='_blank' href={item.url} className='stretched-link'>
              <span className='sr-only'>{item.label}</span>
            </a>}
          </div>
        ))}
      </div>
    </div>
  )
}

type SocialItems = {
  id: number
  icon?: any
  label: string
  url?: string
}

const menu: SocialItems[] = [
  {
    id: 1,
    icon: <Instagram/>,
    label: 'instagram',
    url: 'https://instagram.com'
  },
  {
    id: 2,
    icon: <TikTok/>,
    label: 'tik tok',
    url: 'https://tiktok.com'
  },
  {
    id: 3,
    icon: <Facebook/>,
    label: 'facebook',
    url: 'https://facebook.com'
  },
]