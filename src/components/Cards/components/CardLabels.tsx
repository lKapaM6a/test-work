import React, {FC} from 'react'
import styles from '../cards.module.scss'

interface Props {
  labels: any
}

export const CardLabels: FC<Props> = props => {
  const {labels} = props

  return (
    <div className={styles.card__labels}>
      {labels.map((label: any) => (
        <div key={label.id}
             style={{
               color: label.color,
               backgroundColor: label.bgColor
             }}
             className={styles.card__label}>
          {label.text}
        </div>
      ))}
    </div>
  )
}