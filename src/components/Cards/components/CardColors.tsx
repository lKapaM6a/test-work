import React, {FC} from 'react'
import {Link} from "react-router-dom";
import styles from '../cards.module.scss'

interface Props {
  colors?: any
}

export const CardColors: FC<Props> = props => {
  const {colors} = props

  return (
    <div className={styles.card__colors}>
      {colors.map((color: any) => (
        <Link key={color.id}
              to={color.url}>
          <div style={{
            backgroundColor: color.color,
            border: color.border ? `1px solid ${color.border}` : '',
            color: color.border ? color.border : color.color
          }}
               className={`${styles.card__color} 
               ${color.active ? styles.card__colorActive : ''}`}/>
        </Link>
      ))}

    </div>
  )
}
