import React, {FC, useState} from 'react'
import {useTranslation} from "react-i18next";
import {Button} from "antd";
import {Card} from "../Cards/Card";
import {RadioPicker} from "../RadioPicker/RadioPicker";
import styles from './loadCards.module.scss'

//layout cards
import {cards} from './layout-cards'

interface Props {
  title?: string
  picker?: boolean
}

export const LoadCards: FC<Props> = props => {
  const {title, picker} = props
  const {t} = useTranslation('translation', {keyPrefix: 'cards'});

  const [showMore, setShowMore] = useState(true)
  const [loading, setLoading] = useState(false)

  const toggleShowMore = () => {
    setLoading(true)

    setTimeout(() => {
      setShowMore(false)
      setLoading(true)
    }, 3000)
  }

  return (
    <div className='container'>
      <div className={styles.wrapper}>
        {title && (
          <h2 className={`title ${styles.title}`}>{title}</h2>
        )}

        {picker && (
          <div className={styles.picker}>
            <RadioPicker/>
          </div>
        )}

        <div className={`${styles.cards} ${showMore ? styles.hasContent : ''}`}>
          {cards.map(card => (
            <Card className={styles.card}
                  key={card.id}
                  card={card}/>
          ))}

          {cards.map(card => (
            <Card className={styles.card}
                  key={card.id}
                  card={card}/>
          ))}

          {cards.map(card => (
            <Card className={styles.card}
                  key={card.id}
                  card={card}/>
          ))}

          {cards.map(card => (
            <Card className={styles.card}
                  key={card.id}
                  card={card}/>
          ))}

          {cards.map(card => (
            <Card className={styles.card}
                  key={card.id}
                  card={card}/>
          ))}

          {cards.map(card => (
            <Card className={styles.card}
                  key={card.id}
                  card={card}/>
          ))}
        </div>
        {showMore && (
          <div className={styles.showMore}
               title={t('show-more')}
               onClick={toggleShowMore}>
            <Button loading={loading}
                    disabled={loading}
                    className='ant-btn--show-more'
                    type='primary'>
              {t('show-more')}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}