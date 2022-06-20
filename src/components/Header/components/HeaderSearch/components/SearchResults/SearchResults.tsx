import React, {FC} from 'react'
import {useTranslation} from "react-i18next";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Link} from "react-router-dom";
import {Button} from "antd";
import {publicUrl} from "../../../../../../helpers/PublicUrl.helper";
import styles from './searchResults.module.scss'

interface Props {

}

export const SearchResults: FC<Props> = props => {
  const {} = props
  const {t} = useTranslation('translation', {keyPrefix: 'search.results'});

  return (
    <div className={styles.results}>
      <div className={styles.results__side}>
        <div className={styles.results__sideItem}>
          <div className={styles.results__title}>
            {t('help-search')}
          </div>

          {sideHelp.map(item => (
            <Link key={item.id}
                  className='text-decoration-none'
                  to={item.url}>
              <div className={styles.results__sideResult}
                   dangerouslySetInnerHTML={{__html: item.label}}/>
            </Link>
          ))}
        </div>

        <div className={styles.results__sideItem}>
          <div className={styles.results__title}>
            {t('categories-search')}
          </div>

          {sideCategories.map(item => (
            <Link key={item.id}
                  className='text-decoration-none'
                  to={item.url}>
              <div className={styles.results__sideResult}>
                <div className={styles.results__sideInline}
                     dangerouslySetInnerHTML={{__html: item.label}}/>
                &nbsp;({item.count})
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.results__popular}>
        <div className={styles.results__title}>
          {t('popular-search')}
        </div>

        <div className={styles.results__items}>
          {populars.map((item) => (
            <div key={item.id} className={styles.results__item}>
              <div className={styles.results__image}>
                <LazyLoadImage className={styles.results__imageElement}
                               src={publicUrl(`${item.image}`)}
                               alt={item.name}
                               effect="blur"
                />
              </div>

              <div className={styles.results__content}>
                <div className={styles.results__contentItem}>
                  <div className={styles.results__code}>
                    {item.code}
                  </div>

                  <div className={styles.results__name}>
                    {item.name}
                  </div>
                </div>

                <div className={styles.results__price}>
                  {item.oldPrice && (
                    <div className={styles.results__priceOld}>
                      {item.oldPrice} грн
                    </div>
                  )}

                  <div className={styles.results__priceCurrent}>
                    {item.price} грн
                  </div>
                </div>
              </div>
            </div>
          ))}

          {showAll.visibility && (
            <div key={showAll.id} className={styles.results__showAll}>
              <Link className='text-decoration-none'
                    to={showAll.url}>
                <Button type='primary'
                        className={`ant-btn--small ${styles.results__showAllBtn}`}>
                  {t('show-all-products')}
                </Button>
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

type ResultsSidebar = {
  id: number
  label: any
  url: string
  count?: string
}

type ResultsPopular = {
  id: number
  image: string
  code: string
  name: string
  oldPrice?: string
  price: string
}

type ResultsPopularShowAll = {
  id: number
  url: string
  visibility: boolean
}

const sideHelp: ResultsSidebar[] = [
  {
    id: 1,
    label: '<span>Ноут</span>буки',
    url: '/'
  },
  {
    id: 2,
    label: '<span>Ноут</span>бук Acer',
    url: '/'
  },
  {
    id: 3,
    label: '<span>Ноут</span>бук Hp',
    url: '/'
  },
  {
    id: 4,
    label: '<span>Ноут</span>',
    url: '/'
  },
  {
    id: 5,
    label: '<span>Ноут</span>бук Lenovo',
    url: '/'
  },
]

const sideCategories: ResultsSidebar[] = [
  {
    id: 1,
    label: '<span>Ноут</span>буки',
    url: '/',
    count: '15 568',
  },
  {
    id: 2,
    label: 'Підставки та столики для <span>ноут</span>буків',
    url: '/',
    count: '58 698',
  },
  {
    id: 3,
    label: 'Сумки та рюкзаки для <span>ноут</span>буків',
    url: '/',
    count: '1 256',
  },
  {
    id: 4,
    label: 'Блоки живлення для <span>ноут</span>буків',
    url: '/',
    count: '42',
  },
  {
    id: 5,
    label: 'Захисні наклейки для <span>ноут</span>буків',
    url: '/',
    count: '3',
  },
]

const populars: ResultsPopular[] = [
  {
    id: 1,
    image: '/img/header/search/macbook.png',
    code: 'Код товара: 000178847',
    name: 'Ноутбук APPLE MacBook Air Space Grey (MGN63)',
    oldPrice: '15 459',
    price: '10 999'
  },
  {
    id: 2,
    image: '/img/header/search/macbook.png',
    code: 'Код товара: 000178847',
    name: 'Ноутбук APPLE MacBook Air Space Grey (MGN63)',
    oldPrice: '15 459',
    price: '10 999'
  },
  {
    id: 3,
    image: '/img/header/search/macbook.png',
    code: 'Код товара: 000178847',
    name: 'Ноутбук APPLE MacBook Air Space Grey (MGN63)',
    oldPrice: '15 459',
    price: '10 999'
  },
  {
    id: 4,
    image: '/img/header/search/macbook.png',
    code: 'Код товара: 000178847',
    name: 'Ноутбук APPLE MacBook Air Space Grey (MGN63)',
    oldPrice: '15 459',
    price: '10 999'
  },
  {
    id: 5,
    image: '/img/header/search/macbook.png',
    code: 'Код товара: 000178847',
    name: 'Ноутбук APPLE MacBook Air Space Grey (MGN63)',
    oldPrice: '15 459',
    price: '10 999'
  },
]

const showAll: ResultsPopularShowAll = {
  id: 1,
  url: '/',
  visibility: true
}