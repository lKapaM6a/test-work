import React, {FC} from 'react'
import {Social} from '../Social/Social';
import styles from './footer.module.scss';
import {FooterLogo} from './components/FooterLogo/FooterLogo';
import {CompanyLogo} from './components/CompanyLogo/CompanyLogo';
import {ReactComponent as Viber} from './icons/viber.svg';
import {ReactComponent as Telegram} from './icons/telegram.svg';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

interface Props {

}

export const Footer: FC<Props> = props => {
  const {} = props

  const {t} = useTranslation('translation', {keyPrefix: 'footer'});

  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className='d-flex d-md-none justify-content-center justify-content-sm-start'>
          <FooterLogo/>
        </div>
        <div className={styles.footer__wrap}>
          <div className={styles.footer__content}>
            <div className={styles.footer__section}>
              <div className='d-none d-md-flex'>
                <FooterLogo/>
              </div>
              {aboutList.map(item => (
                <div className={styles.footer__item} key={item.id}>
                  <div className={styles.footer__link}>
                    {item.url && <Link to={item.url}>
                      <span>{item.label && t(item.label)}</span>
                    </Link>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.footer__section}>
              {interestList.map(item => (
                <div className={styles.footer__item} key={item.id}>
                  <h2 className={styles.footer__title}>{item.title && t(item.title)}</h2>
                  <div className={styles.footer__link}>
                    {item.url && <Link to={item.url}>
                      <span>{item.label && t(item.label)}</span>
                    </Link>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.footer__section}>
              {serviceList.map(item => (
                <div className={styles.footer__item} key={item.id}>
                  <h2 className={styles.footer__title}>{item.title && t(item.title)}</h2>
                  <div className={styles.footer__link}>
                    {item.url && <Link to={item.url}>
                      <span>{item.label && t(item.label)}</span>
                    </Link>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.footer__section}>
              {infoList.map(item => (
                <div className={styles.footer__item} key={item.id}>
                  <h2 className={styles.footer__title}>{item.title && t(item.title)}</h2>
                  <div className={styles.footer__link}>
                    {item.url && <Link to={item.url}>
                      <span>{item.label && t(item.label)}</span>
                    </Link>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.footer__section}>
              <div className={styles.footer__section_last}>
                <div className={`${styles.wrapper} ${styles.light} ${styles.footer__list_icon}`}>
                  <div className={`${styles.footer__title} ${styles.footer__title_contact}`}>
                    {t('contacts')}
                  </div>
                  <div className={styles.links}>
                    {menuContact.map(item => (
                      <div className={styles.link} key={item.id}>
                        {item.icon}

                        {item.url &&
                          <a title={item.label} rel='noopener noreferrer' target='_blank' href={item.url}
                             className={'stretched-link'}>
                            <span className='sr-only'>{item.label && t(item.label)}</span>
                          </a>}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.footer__list_contacts}>
                  {callList.map(item => (
                    <div className={styles.footer__item} key={item.id}>
                      {item.url && <a href={`tel:${item.url}`}>
                        <span>{item.phone}</span>
                      </a>
                      }
                    </div>
                  ))}
                </div>

                <div className={`${styles.footer__list_social} d-none d-md-block`}>
                  <Social light/>
                </div>
              </div>
            </div>

            <div className={`${styles.footer__section} d-block d-md-none`}>
              <Social light/>
            </div>
          </div>
          <div className={styles.footer__additional}>
            <p>© 2021 {t('privacy')}</p>
            <div className={styles.footer__copyright}>
              <p>{t('copyright')} <a href="https://bonum-studio.com">Bonum Studio</a></p>
              <CompanyLogo/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

type ContactItems = {
  id: number
  icon?: any
  label: string
  url?: string
}

type FooterItems = {
  id: number
  title: string
  url?: string
  phone?: string
  label: string
}

const menuContact: ContactItems[] = [
  {
    id: 1,
    label: 'viber',
    icon: <Viber/>,
    url: 'https://www.viber.com',
  },
  {
    id: 2,
    icon: <Telegram/>,
    label: 'telegram',
    url: 'https://web.telegram.org',
  },
]

const aboutList: FooterItems[] = [
  {
    id: 1,
    label: 'about',
    url: '#',
    title: ''
  },
  {
    id: 2,
    label: 'vacancies',
    url: '#',
    title: ''
  },
  {
    id: 3,
    label: 'stores',
    url: '#',
    title: ''
  },
  {
    id: 4,
    label: 'recall',
    url: '#',
    title: ''
  },
]

const interestList: FooterItems[] = [
  {
    id: 5,
    title: 'interest',
    url: '#',
    label: ''
  },
  {
    id: 6,
    title: '',
    url: '#',
    label: 'blog'
  },
  {
    id: 7,
    title: '',
    url: '#',
    label: 'promotions'
  },
  {
    id: 8,
    title: '',
    url: '#',
    label: 'bonuses'
  },
]

const serviceList: FooterItems[] = [
  {
    id: 9,
    title: 'service',
    url: '#',
    label: ''
  },
  {
    id: 10,
    title: '',
    url: '#',
    label: 'lending'
  },
  {
    id: 11,
    title: '',
    url: '#',
    label: 'insurance'
  },
  {
    id: 12,
    title: '',
    url: '#',
    label: 'cyberServices'
  },
  {
    id: 13,
    title: '',
    url: '#',
    label: 'exchange'
  },
]

const infoList: FooterItems[] = [
  {
    id: 14,
    title: 'information',
    url: '#',
    label: ''
  },
  {
    id: 15,
    title: '',
    url: '#',
    label: 'payment&delivery'
  },
  {
    id: 16,
    title: '',
    url: '#',
    label: 'guarantee'
  },
  {
    id: 17,
    title: '',
    url: '#',
    label: 'terms'
  },
]

const callList: FooterItems[] = [
  {
    id: 15,
    phone: '0800-33-26-96',
    url: '0800332696',
    title: '',
    label: ''
  },
  {
    id: 16,
    phone: '+38 050-853-23-83',
    url: '+380508532383',
    title: '',
    label: ''
  },
]
