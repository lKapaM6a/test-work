import React, {FC} from 'react'
import {useTranslation} from "react-i18next";
import styles from '../modals.module.scss'

interface Props {

}

export const ModalDescription: FC<Props> = props => {
  const {} = props

  const {t} = useTranslation('translation', {keyPrefix: 'modals.city'});

  return (
    <div className={styles.description}>
      {t('description')}
    </div>
  )
}