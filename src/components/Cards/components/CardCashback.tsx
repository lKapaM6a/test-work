import React, {FC} from 'react'
import {useTranslation} from "react-i18next";
import {ReactComponent as Cashback} from "../icons/cashback.svg";
import styles from '../cards.module.scss'

interface Props {
  cashback?: any
}

export const CardCashback: FC<Props> = props => {
  const {cashback} = props
  const {t} = useTranslation('translation', {keyPrefix: 'cards'});

  return (
    <>
      <div className={styles.card__cashback}>
        <i className={styles.card__cashbackIcon}>
          <Cashback/>
        </i>
        <span className={styles.card__cashbackText}>{t('cashback')}: {cashback} ₴</span>
      </div>
    </>
  )
}