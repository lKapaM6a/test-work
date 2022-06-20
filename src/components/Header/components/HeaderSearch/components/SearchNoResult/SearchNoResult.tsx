import React, {FC} from 'react'
import {useTranslation} from "react-i18next";
import styles from './searchNoResult.module.scss'

interface Props {

}

export const SearchNoResult: FC<Props> = props => {
  const {} = props
  const {t} = useTranslation('translation', {keyPrefix: 'search'});

  return (
    <div className={styles.results}>
      {t('no-results')}
    </div>
  )
}