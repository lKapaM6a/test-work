import React, {FC} from 'react'
import {useTranslation} from "react-i18next";
import {ReactComponent as History} from './icons/history.svg'
import styles from './searchHistory.module.scss'

interface Props {

}

export const SearchHistory: FC<Props> = props => {
  const {} = props
  const {t} = useTranslation('translation', {keyPrefix: 'search.history'});

  return (
    <div className={styles.history}>
      <div className={styles.history__head}>
        {t('title')}
      </div>

      <div className={styles.history__items}>
        <div className={styles.history__item}>
          <i className={styles.history__itemIcon}><History/></i>
          <span className={styles.history__itemText}>Робот</span>
        </div>

        <div className={styles.history__item}>
          <i className={styles.history__itemIcon}><History/></i>
          <span className={styles.history__itemText}>Ноутбук Acer</span>
        </div>
      </div>

      <div className={styles.history__footer}>
        <span className={styles.history__clear}>
          {t('clear')}
        </span>
      </div>
    </div>
  )
}