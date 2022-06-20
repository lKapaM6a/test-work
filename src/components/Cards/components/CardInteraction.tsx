import React, {FC, useState} from 'react'
import {useTranslation} from "react-i18next";
import {ReactComponent as Comparison} from "../icons/comparison.svg";
import {ReactComponent as Added} from "../icons/added.svg";
import {ReactComponent as Favorite} from "../icons/favorite.svg";
import styles from '../cards.module.scss'

interface Props {

}

export const CardInteraction: FC<Props> = props => {
  const {} = props
  const {t} = useTranslation('translation', {keyPrefix: 'cards'});

  const [comparison, setComparison] = useState(false)
  const [favorite, setFavorite] = useState(false)

  const toggleComparison = () => {
    setComparison(!comparison)
  }

  const toggleFavorite = () => {
    setFavorite(!favorite)
  }

  return (
    <div className={styles.card__interactions}>
      <div onClick={toggleComparison}
           title={t('comparison')}
           className={`${styles.card__interaction} ${styles.comparison}`}>
        <Comparison/>
        <Added className={`${styles.card__interactionAdded} ${comparison ? styles.isActive : ''}`}/>
      </div>

      <div onClick={toggleFavorite}
           className={`${styles.card__interaction} ${styles.favorite}`}>
        <Favorite className={favorite ? styles.isActive : ''}/>
      </div>
    </div>
  )
}