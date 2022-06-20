import React, { FC, useCallback, useState } from 'react'
import StarRatingComponent from 'react-star-rating-component'
import {ReactComponent as StarIcon} from "./icons/star.svg";
import styles from './starRating.module.scss'

interface Props {
  rating: number
  inactive?: boolean
  onClick: (rating: number) => void
}

export const StarRating: FC<Props> = props => {
  const { rating, onClick, inactive } = props

  const [ratingHover, setRatingHover] = useState<number>(rating)

  const onStarClick = useCallback(nextValue => {
    onClick(nextValue)
  }, [])

  const onStarHover = useCallback(nextValue => {
    setRatingHover(nextValue)
  }, [])

  const onStarHoverOut = useCallback(() => {
    setRatingHover(rating)
  }, [])

  return (
    <div className={styles.stars}>
      <div className={styles.stars__wrapper}>
        <StarRatingComponent
          name=''
          starCount={5}
          value={ratingHover}
          onStarHover={onStarHover}
          onStarClick={onStarClick}
          onStarHoverOut={onStarHoverOut}
          starColor='#F9E505'
          emptyStarColor=' #9E9E9E'
          editing={!inactive}
          renderStarIcon={() => <StarIcon />}
        />
      </div>
      <span className={styles.stars__count}>{ratingHover}</span>
    </div>
  )
}
