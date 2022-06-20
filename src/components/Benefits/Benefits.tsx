import React, {FC} from 'react'
import {useTranslation} from 'react-i18next';
import {ReactComponent as BadgeCheck} from "./icons/badge-check.svg";
import {ReactComponent as CurrencyDollar} from "./icons/currency-dollar.svg";
import {ReactComponent as ShieldCheck} from "./icons/shield-check.svg";
import {ReactComponent as Transportation} from "./icons/transportation.svg";
import {ReactComponent as UserGroup} from "./icons/user-group.svg";
import {ReactComponent as Handshake} from "./icons/handshake.svg";
import styles from './benefits.module.scss'

interface Props {

}

export const Benefits: FC<Props> = props => {
  const {} = props
  const {t} = useTranslation('translation', {keyPrefix: 'benefits'});

  return (
    <div className={`${styles.benefits} container`}>
      <h2 className="title title--xl title--center"> {t('benefits')}</h2>
      <ul className={styles.benefits__list}>
        {listBenefits.map(item => (
          <li className={styles.benefits__item} key={item.id}>
            <div className={styles.benefits__icon}>{item.icon}</div>
            <h2 className={styles.benefits__subtitle} dangerouslySetInnerHTML={{__html: t(item.label)}}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

type BenefitsItems = {
  id: number
  icon?: any
  label: string
}

const listBenefits: BenefitsItems[] = [
  {
    id: 1,
    label: 'guarantee',
    icon: <ShieldCheck/>,
  },
  {
    id: 2,
    icon: <BadgeCheck/>,
    label: 'certificate',
  },
  {
    id: 3,
    label: 'cashback',
    icon: <CurrencyDollar/>,
  },
  {
    id: 4,
    icon: <Transportation/>,
    label: 'shipping',
  },
  {
    id: 5,
    label: 'consultation',
    icon: <UserGroup/>,
  },
  {
    id: 6,
    icon: <Handshake/>,
    label: 'individual',
  },
]
