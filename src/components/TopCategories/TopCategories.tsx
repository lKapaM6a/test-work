import React, {FC} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation, Pagination} from 'swiper';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {publicUrl} from '../../helpers/PublicUrl.helper';
import {Link} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import {WatchAll} from '../WatchAll/WatchAll';
import styles from './topCategories.module.scss'

interface Props {

}

export const TopCategory: FC<Props> = props => {
  const {} = props
  const {t} = useTranslation('translation', {keyPrefix: 'category'});

  const sliderOptions = {
    spaceBetween: 0,
    loop: true
  }

  return (
    <div className={`container ${styles.category}`}>
      <WatchAll title={t("title")} link={{url: "/", linkText: t("all")}}/>
      <Swiper
        className="slider-small"
        modules={[Pagination]}
        slidesPerView='auto'
        spaceBetween={sliderOptions.spaceBetween}
        loop={sliderOptions.loop}
        pagination={{clickable: true}}>
        {listCategory.map(item => (
          <SwiperSlide key={item.id} className={styles.category__item}>
            <h2 className={styles.category__subtitle} dangerouslySetInnerHTML={{__html: t(item.label)}}/>
            <LazyLoadImage src={item.img} alt={item.label}/>
            {item.url && <Link className="ant-btn--not-shadow ant-btn-primary ant-btn--small" to={item.url}>
              <span>{t('review')}</span>
            </Link>
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

type CategoryItems =
  {
    id: number
    img?: any
    label: string
    url?: string
  }

const listCategory: CategoryItems[] = [
  {
    id: 1,
    label: 'phones',
    img: publicUrl('/img/category/category-1.png'),
    url: '#',
  },
  {
    id: 2,
    label: 'tablets',
    img: publicUrl('/img/category/category-2.png'),
    url: '#',
  },
  {
    id: 3,
    label: 'robotics',
    img: publicUrl('/img/category/category-3.png'),
    url: '#',
  },
  {
    id: 4,
    label: 'headphone',
    img: publicUrl('/img/category/category-4.png'),
    url: '#',
  },
  {
    id: 5,
    label: 'tv',
    img: publicUrl('/img/category/category-5.png'),
    url: '#',
  },
  {
    id: 6,
    label: 'tablets',
    img: publicUrl('/img/category/category-2.png'),
    url: '#',
  },
  {
    id: 7,
    label: 'robotics',
    img: publicUrl('/img/category/category-3.png'),
    url: '#',
  }
]

