import React, {FC, useCallback, useEffect, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {publicUrl} from "../../helpers/PublicUrl.helper";
import {PromotionalCard} from "../Cards/PromotionalCard";
import {PromotionalCardsItems} from "../../interfaces/PromotionalCards/PromotionalCard.interface";
import styles from './promotionalCards.module.scss'

interface Props {

}

export const PromotionalCards: FC<Props> = props => {
  const {} = props

  const [isMobile, setIsMobile] = useState(false)
  const mobileView = 1220

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

  const sliderOptions = {
    delay: 7000,
    spaceBetween: 8,
    loop: true,
    lazy: true
  }

  return (
    <Swiper modules={[Navigation, Pagination, Autoplay]}
            id='promotional-slider'
            className={`promotional-slider promotional-slider--pagination ${styles.slider}`}
            slidesPerView='auto'
            lazy={sliderOptions.lazy}
            spaceBetween={sliderOptions.spaceBetween}
            loop={sliderOptions.loop}
            navigation
            autoplay={{delay: sliderOptions.delay}}
            pagination={{clickable: true}}
    >
      {cards.map(card => (
        <SwiperSlide key={card.id} className={styles.slider__item}>
          <PromotionalCard key={card.id} content={card}/>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}


const cards: PromotionalCardsItems[] = [
  {
    id: 1,
    img: publicUrl('/img/cards/promotional-1-ua.png'),
    imgMobile: publicUrl('/img/cards/promotional-1-ua_mob.png'),
    label: 'Label 1',
    url: '/'
  },
  {
    id: 2,
    img: publicUrl('/img/cards/promotional-2-ua.png'),
    imgMobile: publicUrl('/img/cards/promotional-2-ua_mob.png'),
    label: 'Label 2',
    url: '/'
  },
  {
    id: 3,
    img: publicUrl('/img/cards/promotional-3-ua.png'),
    imgMobile: publicUrl('/img/cards/promotional-3-ua_mob.png'),
    label: 'Label 3',
    url: '/'
  },
  {
    id: 4,
    img: publicUrl('/img/cards/promotional-1-ua.png'),
    imgMobile: publicUrl('/img/cards/promotional-1-ua_mob.png'),
    label: 'Label 4',
    url: '/'
  },
  {
    id: 5,
    img: publicUrl('/img/cards/promotional-2-ua.png'),
    imgMobile: publicUrl('/img/cards/promotional-2-ua_mob.png'),
    label: 'Label 5',
    url: '/'
  },
  {
    id: 6,
    img: publicUrl('/img/cards/promotional-3-ua.png'),
    imgMobile: publicUrl('/img/cards/promotional-3-ua_mob.png'),
    label: 'Label 6',
    url: '/'
  },
  {
    id: 7,
    img: publicUrl('/img/cards/promotional-2-ua.png'),
    imgMobile: publicUrl('/img/cards/promotional-2-ua_mob.png'),
    label: 'Label 7',
    url: '/'
  },
]