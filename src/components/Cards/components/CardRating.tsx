import React, {FC} from 'react'
import {Link} from "react-router-dom"
import {StarRating} from "../../StarRating";
import {ReactComponent as Comments} from "../icons/comments.svg";
import styles from '../cards.module.scss'

interface Props {
  rating?: any
}

export const CardRating: FC<Props> = props => {
  const {rating} = props

  return (
    <Link to={rating.url}
          className={styles.card__rating}>
      <div className={styles.card__ratingWrapper}>
        <StarRating rating={rating.rating}
                    onClick={() => null}
                    inactive/>
      </div>

      <i className={styles.card__ratingComments}>
        <Comments/>
      </i>
    </Link>
  )
}
