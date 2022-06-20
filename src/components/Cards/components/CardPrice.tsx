import React, {FC} from 'react'
import styles from '../cards.module.scss'

interface Props {
  price: any
}

export const CardPrice: FC<Props> = props => {
  const {price} = props

  return (
    <div className={styles.card__priceWrapper}>
      <div className={styles.card__priceHead}>
        {price.oldPrice && (
          <div className={styles.card__oldPrice}>
            {price.oldPrice} ₴
          </div>
        )}

        {price.discount && (
          <div className={styles.card__discount}>
            -{price.discount}%
          </div>
        )}
      </div>

      <div className={styles.card__price}>
        {price.price} ₴
      </div>
    </div>
  )
}