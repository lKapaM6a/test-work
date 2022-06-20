import React, {FC} from 'react'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {PopularBrandsInterface} from "../../../interfaces/PopularBrands/PopularBrands.interface";
import styles from '../popularBrands.module.scss'

interface Props {
  brand: PopularBrandsInterface
}

export const PopularBrand: FC<Props> = props => {
  const {brand} = props
  const {t} = useTranslation('translation', {keyPrefix: 'brands'});

  return (
    <div className={`${styles.brand} ${brand.all ? styles.isActive : ''}`}>
      <Link to={brand.url} className={styles.brand__link} title={brand.label}>
        {brand.image && (
          <div className={styles.brand__img}>
            <LazyLoadImage src={brand.image}
                           alt={brand.label}
                           effect="blur"/>
          </div>
        )}

        {brand.all && (
          t('all-brands')
        )}

        {!brand.image && (
          <span className={styles.brand__text}>
            {brand.label}
          </span>
        )}
      </Link>
    </div>
  )
}

