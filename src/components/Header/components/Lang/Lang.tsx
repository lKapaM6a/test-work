import React, {FC} from 'react'
import {useTranslation} from 'react-i18next'
import '../../../../i18n'
import styles from './lang.module.scss'

interface Props {
  light?: boolean
}

export const Lang: FC<Props> = props => {
  const {light} = props

  const {i18n} = useTranslation();
  const {t} = useTranslation('translation', {keyPrefix: 'chooseLang'});

  return (
    <div className={`unselectable ${styles.wrapper} ${light ? styles.light : ''}`}>
      <div className={`${styles.lang} ${i18n.language === 'ua' ? styles.active : ''}`}
           onClick={() => {
             i18n.changeLanguage("ua");
           }}>
        {t('ua')}
      </div>
      <div className={styles.line}/>
      <div className={`unselectable ${styles.lang} ${i18n.language === 'ru' ? styles.active : ''}`}
           onClick={() => {
             i18n.changeLanguage("ru");
           }}>
        {t('ru')}
      </div>
    </div>
  )
}