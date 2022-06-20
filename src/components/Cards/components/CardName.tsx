import React, {FC} from 'react'
import {Link} from "react-router-dom"
import styles from '../cards.module.scss'

interface Props {
  name: any
}

export const CardName: FC<Props> = props => {
  const {name} = props

  return (
    <div className={styles.card__nameWrapper}>
      <Link to={name.url}
            title={name.name}
            className={styles.card__name}>
        {name.name}
      </Link>
    </div>
  )
}