import React, {FC} from 'react'
import {useTranslation} from "react-i18next";
import {ReactComponent as CatalogIcon} from './icons/catalog.svg';
import styles from './headerCatalog.module.scss'

interface Props {
  onClick?: () => void
}

export const HeaderCatalog: FC<Props> = props => {
  const {onClick} = props
  const {t} = useTranslation('translation', {keyPrefix: 'catalog'});

  return (
    <div className={`${styles.wrapper} unselectable`} onClick={onClick}>
      <i className={styles.icon}>
        <CatalogIcon/>
      </i>

      <span className={styles.text}>
        {t('catalog')}
      </span>
    </div>
  )
}