import React, {FC} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {useTranslation} from "react-i18next";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {publicUrl} from "../../helpers/PublicUrl.helper";
import {PopularBrandsInterface} from "../../interfaces/PopularBrands/PopularBrands.interface";
import {PopularBrand} from "./components/PopularBrand";
import styles from './popularBrands.module.scss'


interface Props {

}

export const PopularBrands: FC<Props> = props => {
  const {} = props
  const {t} = useTranslation('translation', {keyPrefix: 'brands'});

  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <div className={`title ${styles.wrapper__title}`}>{t('title')}</div>

        <Swiper id='brands-slider'
                className={styles.wrapper__cards}
                slidesPerView='auto'>
          {brands.map(brand => (
            <SwiperSlide key={brand.id}
                         className={styles.wrapper__card}>
              <PopularBrand key={brand.id} brand={brand}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

const brands: PopularBrandsInterface[] = [
  {
    id: 1,
    image: publicUrl('img/brands/apple.png'),
    label: 'Apple',
    url: '/'
  },
  {
    id: 2,
    image: publicUrl('img/brands/lenovo.png'),
    label: 'Lenovo',
    url: '/'
  },
  {
    id: 3,
    image: publicUrl('img/brands/xiaomi.png'),
    label: 'Xiaomi',
    url: '/'
  },
  {
    id: 4,
    image: publicUrl('img/brands/haier.png'),
    label: 'Haier',
    url: '/'
  },
  {
    id: 5,
    image: publicUrl('img/brands/dji.png'),
    label: 'Dji',
    url: '/'
  },
  {
    id: 6,
    image: publicUrl('img/brands/sony.png'),
    label: 'Sony',
    url: '/'
  },
  {
    id: 7,
    image: publicUrl('img/brands/jbl.png'),
    label: 'JBL',
    url: '/'
  },
  {
    id: 8,
    image: publicUrl('img/brands/jbl.png'),
    label: 'JBL',
    url: '/'
  },
  {
    id: 9,
    all: true,
    url: '/'
  },
]

