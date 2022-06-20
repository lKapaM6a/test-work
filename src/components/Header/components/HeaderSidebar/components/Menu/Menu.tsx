import React, {FC, useCallback, useState} from 'react'
import {useTranslation} from 'react-i18next';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../../store/store";
import {SideBarItems} from "../../../../../../interfaces/Menu/Menu.interface"
import {Lang} from "../../../Lang/Lang";
import {Social} from "../../../../../Social/Social";
import {publicUrl} from "../../../../../../helpers/PublicUrl.helper";
import styles from './menu.module.scss'
import {ModalCity} from "../../../../../Modals/ModalCity";
import {FeedbackModal} from "../../../../../Modals/FeedbackModal";
import {SuccessModal} from "../../../../../Modals/SuccessModal";
import {setCityModal, setFeedbackModal} from "../../../../../../store/reducers/modalsReducer";

interface Props {
  visibleSidebar?: boolean
  setVisibleSidebar?: (val: boolean) => void
}

export const Menu: FC<Props> = props => {
  const {setVisibleSidebar} = props
  const {t} = useTranslation('translation', {keyPrefix: 'sideBar'});

  // Modals

  const dispatch = useDispatch()

  const showCityModal = () => {
    dispatch(setCityModal(true))
  };

  const showFeedbackModal = () => {
    dispatch(setFeedbackModal(true))
  };

  const body = document.body

  const showMenu = useCallback(() => {
    if (setVisibleSidebar) {
      setVisibleSidebar(false)
    }

    body.setAttribute('visible-menu', 'true')
  }, [body, setVisibleSidebar])

  const city = useSelector((state: RootState) => state.city)

  return (
    <div className={styles.wrapper}>
      <div className={styles.linkWrapper}>
        <div className={styles.text}>
          <img className={styles.icon} src={publicUrl(`/img/header/sidebar/user.svg`)} alt={'login/register'}/>
          <span className={styles.link}>
            {t('entry')}
            <Link className='stretched-link' to={'/'}>
              <span className='sr-only'> {t('entry')}</span>
            </Link>
          </span>

          <span className={styles.line}/>

          <span className={styles.link}>
            {t('registration')}
            <Link className='stretched-link' to={'/'}>
              <span className='sr-only'>{t('registration')}</span>
            </Link>
          </span>
        </div>
      </div>

      <div>
        {menu.map(item => (
          <div onClick={() => item.onClick ? (showMenu()) : null} className={styles.linkWrapper} key={item.id}>
            <div className={styles.text}>
              <img className={styles.icon} src={publicUrl(`/img/header/sidebar/${item.icon}.svg`)} alt={t(item.label)}/>
              <span className={styles.link}>{t(item.label)}</span>
            </div>

            {item.url && <Link className='stretched-link' to={item.url}>
              <span className='sr-only'> {t('entry')}</span>
            </Link>
            }
          </div>
        ))}
      </div>

      <div className='divider'/>

      <div>
        {locationMenu.map(item => (
          <div onClick={() => item.onClick ? showCityModal() : null} className={styles.linkWrapper}
               key={item.id}>
            <div className={styles.text}>
              <img className={styles.icon} src={publicUrl(`/img/header/sidebar/${item.icon}.svg`)} alt={t(item.label)}/>
              <span className={styles.link}>
                 {item.city && city.city ? city.city : t(item.label)}
              </span>
            </div>

            {item.chooseLang && <Lang/>}

            {item.arrow && <img className={styles.arrow} src={publicUrl(`/img/icons/next-arrow.svg`)} alt=''/>}
          </div>
        ))}
      </div>

      <div className='divider'/>

      <div>
        {callMenu.map(item => (
          <div onClick={() => item.onClick ? showFeedbackModal() : null} className={styles.linkWrapper}
               key={item.id}>
            <div className={styles.text}>
              <img className={styles.icon} src={publicUrl(`/img/header/sidebar/${item.icon}.svg`)}
                   alt={item.label && t(item.label)}/>
              <span className={styles.link}>
                {item.label && t(item.label)}
                {item.phone && item.phone}
              </span>
            </div>

            {item.url && <a className={'stretched-link'} href={`tel:${item.url}`}>
              <span className='sr-only'>{item.label}</span>
            </a>}
            {item.arrow && <img className={styles.arrow} src={publicUrl(`/img/icons/next-arrow.svg`)} alt=''/>}
          </div>
        ))}
      </div>

      <div className='divider'/>

      <div>
        {infoMenu.map(item => (
          <div className={`${styles.linkWrapper} ${styles.linkWithoutIcon}`} key={item.id}>
            <div className={styles.text}>
              <span className={styles.link}>{item.label && t(item.label)}</span>
            </div>

            {item.url && <Link className='stretched-link' to={item.url}>
              <span className='sr-only'> {t('entry')}</span>
            </Link>
            }
          </div>
        ))}
      </div>

      <div className='divider'/>

      <div className={styles.semiTitle}>{t('more')}</div>

      <div>
        {moreMenu.map(item => (
          <div className={`${styles.linkWrapper} ${styles.linkWithoutIcon}`} key={item.id}>
            <div className={styles.text}>
              <span className={styles.link}>{item.label && t(item.label)}</span>
            </div>

            {item.url && <Link className='stretched-link' to={item.url}>
              <span className='sr-only'> {t('entry')}</span>
            </Link>
            }
          </div>
        ))}
      </div>

      <div className='divider'/>

      <Social/>

      <ModalCity/>
      <FeedbackModal/>
      <SuccessModal/>
    </div>
  )
}

const menu: SideBarItems[] = [
  {
    id: 1,
    icon: 'catalog',
    label: 'catalog',
    onClick: true,
  },
  {
    id: 2,
    icon: 'basket',
    label: 'basket',
    url: '/'
  },
  {
    id: 3,
    icon: 'favorites',
    label: 'favorites',
    url: '/'
  },
  {
    id: 4,
    icon: 'comparison',
    label: 'comparison',
    url: '/'
  },
]

const locationMenu: SideBarItems[] = [
  {
    id: 5,
    icon: 'lang',
    label: 'lang',
    chooseLang: true
  },
  {
    id: 6,
    icon: 'city',
    label: 'city',
    arrow: true,
    onClick: true,
    city: true
  },
]

const callMenu: SideBarItems[] = [
  {
    label: '',
    id: 7,
    icon: 'call-phone',
    phone: '+38 050 853 23 83',
    url: '+380508532383'
  },
  {
    id: 8,
    icon: 'recall',
    label: 'recall',
    arrow: true,
    onClick: true
  },
]

const infoMenu: SideBarItems[] = [
  {
    id: 9,
    label: 'promotions',
    url: '/'
  },
  {
    id: 10,
    label: 'bonuses',
    url: '/'
  },
  {
    id: 11,
    label: 'stores',
    url: '/'
  },
  {
    id: 12,
    label: 'loans',
    url: '/'
  },
  {
    id: 13,
    label: 'payment&delivery',
    url: '/'
  },
]

const moreMenu: SideBarItems[] = [
  {
    id: 14,
    label: 'about',
    url: '/'
  },
  {
    id: 15,
    label: 'vacancies',
    url: '/'
  },
  {
    id: 16,
    label: 'exchange',
    url: '/'
  },
  {
    id: 17,
    label: 'services',
    url: '/'
  },
  {
    id: 18,
    label: 'insurance',
    url: '/'
  },
  {
    id: 19,
    label: 'guarantee',
    url: '/'
  },
]