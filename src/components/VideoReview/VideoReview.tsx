import React, {FC} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {useTranslation} from 'react-i18next';
import {publicUrl} from '../../helpers/PublicUrl.helper';
import {WatchAll} from '../WatchAll/WatchAll';
import {ReactComponent as Play} from './icons/icon-play.svg';
import styles from './videoReview.module.scss'

interface Props {

}

export const VideoReview: FC<Props> = props => {
  const {} = props
  const {t} = useTranslation('translation', {keyPrefix: 'video'});

  const sliderOptions = {
    spaceBetween: 0,
    loop: true
  }

  return (
    <div className={`container ${styles.video}`}>
      <WatchAll title={t("title")} link={{url: "/", linkText: t("all")}}/>
      <Swiper
        className="slider-small"
        modules={[Pagination]}
        slidesPerView='auto'
        spaceBetween={sliderOptions.spaceBetween}
        loop={sliderOptions.loop}
        pagination={{clickable: true}}>
        {listVideo.map(item => (
          <SwiperSlide key={item.id} className={styles.video__item}>
            <div className={styles.video__screen}>
              <LazyLoadImage src={item.img} alt={item.label}/>
              <div className={styles.video__player}>
                {item.url &&
                  <a title={item.label} className={styles.video__play} target='_blank'
                     href={item.url}>
                    <Play className={styles.video__icon}/>
                  </a>}
              </div>
            </div>

            <div className={styles.video__desc}>
              {item.url &&
                <a title={item.label} className={styles.video__play} target='_blank'
                   href={item.url}>
                  <h3 className={styles.video__subtitle}>{item.label}</h3>
                </a>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

type VideoItems =
  {
    id: number
    url?: string
    label: string
    img?: any
  }

const listVideo: VideoItems[] = [
  {
    id: 1,
    url: "https://youtu.be/jx37ua-cDs4",
    label: "Жизнь без Play Маркет. 1 неделя с Huawei Nova 9!",
    img: publicUrl('/img/video-screen/screen-1.jpg')
  },
  {
    id: 2,
    url: "https://youtu.be/7ZiZoELcgvo",
    label: "Обзор MSI Creator Z16. Мощный ноутбук для любых задач.",
    img: publicUrl('/img/video-screen/screen-2.jpg')
  },
  {
    id: 3,
    url: "https://youtu.be/bqFO5frxCec",
    label: "Xiaomi Lydsto R1 - ЛУЧШИЙ робот пылесос с самоочисткой и влажной уборкой.",
    img: publicUrl('/img/video-screen/screen-3.jpg')
  },
  {
    id: 4,
    url: "https://youtu.be/q7FY6fwwxNc",
    label: "Обзор Apple AirPods 3. Сравниваем с AirPods и AirPods Pro. Что лучше ?",
    img: publicUrl('/img/video-screen/screen-4.jpg')
  },
  {
    id: 5,
    url: "https://youtu.be/jx37ua-cDs4",
    label: "Жизнь без Play Маркет. 1 неделя с Huawei Nova 9!",
    img: publicUrl('/img/video-screen/screen-1.jpg')
  },
  {
    id: 6,
    url: "https://youtu.be/q7FY6fwwxNc",
    label: "Обзор Apple AirPods 3. Сравниваем с AirPods и AirPods Pro. Что лучше ?",
    img: publicUrl('/img/video-screen/screen-4.jpg')
  },
  {
    id: 7,
    url: "https://youtu.be/bqFO5frxCec",
    label: "Xiaomi Lydsto R1 - ЛУЧШИЙ робот пылесос с самоочисткой и влажной уборкой.",
    img: publicUrl('/img/video-screen/screen-3.jpg')
  }
]

