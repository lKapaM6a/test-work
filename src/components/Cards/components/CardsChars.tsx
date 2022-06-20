import React, {FC} from 'react'
import styles from '../cards.module.scss'

interface Props {
  chars?: any
}

export const CardChars: FC<Props> = props => {
  const {chars} = props

  return (
    <div className={styles.card__chars}>
      {chars.map((char: any) => (
        <div key={char.id}
             className={styles.card__char}>
          {char.info}: <span>{char.detail}</span>
        </div>
      ))}
    </div>
  )
}