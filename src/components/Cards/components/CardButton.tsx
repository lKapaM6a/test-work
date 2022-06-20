import React, {FC, useState} from 'react'
import {Button} from "antd";
import {useTranslation} from "react-i18next";
import {ReactComponent as Basket} from "../icons/basket.svg";
import {ReactComponent as Added} from "../icons/added.svg";
import styles from '../cards.module.scss'

interface Props {

}

export const CardButton: FC<Props> = props => {
  const {} = props
  const {t} = useTranslation('translation', {keyPrefix: 'cards'});

  const [add, setAdd] = useState(false)
  const [loading, setLoading] = useState(false)

  //For layout only
  const toggleAddToBasket = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setAdd(!add)
    }, 1000)
  }

  return (
    <div className={styles.card__button}>
      {buyButton.available && (
        !add ? (
          <Button onClick={toggleAddToBasket}
                  loading={loading}
                  disabled={loading}
                  className='ant-btn ant-btn-primary ant-btn__card-basket'
                  type='primary'>

            {!loading && (
              <i className='ant-btn__icon'>
                <Basket/>
              </i>
            )}

            {t('add-to-basket')}
          </Button>
        ) : (
          <Button onClick={toggleAddToBasket}
                  loading={loading}
                  disabled={loading}
                  className='ant-btn ant-btn-primary ant-btn__card-basket ant-btn__card-basket-added'
                  type='primary'>

            {!loading && (
              <i className='ant-btn__icon'>
                <Basket/>
                <Added className='ant-btn__icon-added'/>
              </i>
            )}
            {t('remove-from-basket')}
          </Button>
        )
      )}
    </div>
  )
}

type addToBasket = {
  available?: boolean
}

const buyButton: addToBasket = {
  available: true
}