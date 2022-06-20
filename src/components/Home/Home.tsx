import React, {FC} from 'react'
import {useTranslation} from "react-i18next";
import {CatalogMenu} from "../CatalogMenu/CatalogMenu";
import {PromotionalCards} from "../PromotionalCards/PromotionalCards";
import {PopularBrands} from "../PopularBrands/PopularBrands";
import {LoadCards} from "../LoadCards/LoadCards";
import {TopCategory} from "../TopCategories/TopCategories";
import {Benefits} from "../Benefits/Benefits";
import {SeoText} from '../SeoText/SeoText'
import {VideoReview} from "../VideoReview/VideoReview";
import styles from './home.module.scss'

interface Props {

}

const Home: FC<Props> = props => {
  const {} = props
  const {t} = useTranslation('translation', {keyPrefix: 'cards'});

  return (
    <>
      <div className='container'>
        <div className={styles.banner}>
          <div className={`d-none d-lg-block ${styles.banner__menu}`}>
            <CatalogMenu/>
          </div>

          <PromotionalCards/>
        </div>
      </div>
      <PopularBrands/>
      <LoadCards title={t('sales-leaders')}
                 picker/>
      <LoadCards title={t('new')}
                 picker/>
      <TopCategory/>
      <VideoReview/>
      <Benefits/>
      <SeoText/>
    </>
  )
}

export default Home

