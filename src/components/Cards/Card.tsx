import React, {FC, useCallback, useEffect, useState} from 'react'
import {CardLabels} from "./components/CardLabels";
import {CardImage} from "./components/CardImage";
import {CardColors} from "./components/CardColors";
import {CardAvailable} from "./components/CardAvailable";
import {CardName} from "./components/CardName";
import {CardRating} from "./components/CardRating";
import {CardInteraction} from "./components/CardInteraction";
import {CardInstallmentPlan} from "./components/CardInstallmentPlan";
import {CardPrice} from "./components/CardPrice";
import {CardButton} from "./components/CardButton";
import {CardChars} from "./components/CardsChars";
import {CardCashback} from "./components/CardCashback";
import styles from './cards.module.scss'

interface Props {
  card: any
  className?: string
}

export const Card: FC<Props> = props => {
  const {card, className} = props

  const [isMobile, setIsMobile] = useState(false)
  const mobileView = 812

  const mobileDetect = useCallback(() => {
    if (window.innerWidth < mobileView && !isMobile) {
      setIsMobile(true)
      return
    }
    if (window.innerWidth >= mobileView && isMobile) {
      setIsMobile(false)
    }
  }, [isMobile])

  useEffect(() => {
    window.addEventListener('resize', mobileDetect)
    mobileDetect()
    return () => {
      window.removeEventListener('resize', mobileDetect)
    }
  })

  return (
    <div className={`${styles.card} ${className ? className : ''}`}>
      <div className={styles.card__head}>
        {card.labels.length > 0 && (
          <CardLabels labels={card.labels}/>
        )}

        <CardImage image={card.image}/>

        {card.color.length > 0 && (
          <CardColors colors={card.color}/>
        )}

        <div className={styles.card__infoHead}>
          <CardAvailable available={card.available}/>

          {/*Cashback desktop*/}
          {!isMobile && card.cashback && (
            <CardCashback cashback={card.cashback}/>
          )}
        </div>
      </div>

      <div className={styles.card__body}>
        <CardName name={card.name}/>

        <div className={styles.card__infoFlex}>
          <div className={styles.space}>
            {card.rating && (
              <CardRating rating={card.rating}/>
            )}
          </div>

          {/*Interaction desktop*/}
          {!isMobile && (
            <CardInteraction/>
          )}
        </div>

        <CardInstallmentPlan/>

        {isMobile && (
          <div className={styles.card__infoMobile}>
            {/*Price mobile*/}
            <CardPrice price={card.price}/>

            {/*Cashback mobile*/}
            {card.cashback && (
              <CardCashback cashback={card.cashback}/>
            )}
          </div>
        )}
      </div>
      <div className={styles.card__footer}>
        {/*Price desktop*/}
        {!isMobile && (
          <CardPrice price={card.price}/>
        )}

        {/*Interaction mobile*/}
        {isMobile && (
          <CardInteraction/>
        )}

        {card.available && (
          <CardButton/>
        )}
      </div>

      {card.chars.length > 0 && (
        <div className={styles.card__infoAbsolute}>
          <div className={styles.card__holder}>
            <CardChars chars={card.chars}/>
          </div>
        </div>
      )}
    </div>
  )
}