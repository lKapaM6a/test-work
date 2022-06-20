import React, {FC} from 'react'
import {useTranslation} from "react-i18next";
import {ReactComponent as Available} from "../icons/available.svg";
import {ReactComponent as NotAvailable} from "../icons/not-available.svg";
import styles from '../cards.module.scss'

interface Props {
  available: any
}

export const CardAvailable: FC<Props> = props => {
  const {available} = props
  const {t} = useTranslation('translation', {keyPrefix: 'cards'});

  return (
    <>
      {available ? (
        <div key={available.id}
             className={styles.card__available}>
          <i className={styles.card__availableIcon}>
            <Available/>
          </i>
          <span className={styles.card__availableText}>{t('available')}</span>
        </div>
      ) : (
        <div key={available.id}
             className={styles.card__notAvailable}>
          <i className={styles.card__availableIcon}>
            <NotAvailable/>
          </i>
          <span className={styles.card__availableText}>{t('no-available')}</span>
        </div>
      )}
    </>
  )
}