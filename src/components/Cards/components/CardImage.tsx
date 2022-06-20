import React, {FC, useCallback, useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import styles from '../cards.module.scss'
import {publicUrl} from "../../../helpers/PublicUrl.helper";

interface Props {
  image: any
}

export const CardImage: FC<Props> = props => {
  const {image} = props

  return (
    <div className={styles.card__image}>
      <Link to={image.url}
            title={image.label}
            className={styles.card__imageLink}>
        <LazyLoadImage key={image.image}
                       src={image.image ? publicUrl(image.image) : publicUrl('/img/cards/placeholder.png')}
                       alt={image.label}
                       effect="blur"/>
      </Link>
    </div>
  )
}
