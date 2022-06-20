import React, {Dispatch, FC, useCallback} from 'react'
import {Link} from "react-router-dom";
import {ReactComponent as User} from './icons/user.svg';
import {ReactComponent as Favorite} from './icons/favorites.svg';
import {ReactComponent as Comparison} from './icons/comparison.svg';
import {ReactComponent as Basket} from './icons/basket.svg';
import {ReactComponent as Phone} from './icons/phone.svg';
import styles from './headerInteraction.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store/store";
import {setFeedbackModal} from "../../../../store/reducers/modalsReducer";

interface Props {
}



export const HeaderInteraction: FC<Props> = props => {
  const {} = props
  const items: interaction[] = [
    {
      id: 1,
      icon: <User/>,
      label: 'Personal account',
      url: '/',
      className: 'd-none d-md-block'
    },
    {
      id: 2,
      icon: <Favorite/>,
      label: 'Favorite',
      count: '0',
      url: '/',
      className: 'd-none d-md-block'
    },
    {
      id: 3,
      icon: <Comparison/>,
      label: 'Comparison',
      count: '0',
      url: '/',
      className: 'd-none d-md-block'
    },
    {
      id: 4,
      icon: <Basket/>,
      label: 'Basket',
      count: '0',
      url: '/'
    },
    {
      id: 5,
      icon: <Phone/>,
      label: 'Phone',
      click: function () {
        dispatch(setFeedbackModal(true))
      },
      className: 'd-none d-lg-block'
    },
  ]

  const dispatch = useDispatch()

  return (
    <div className={styles.interaction}>
      {items.map((item) => (
        <div key={item.id}
             className={`${styles.interaction__wrapper} ${item.className ? item.className : ''}`}>
          <div onClick={() => item.click ? item.click() : null}
               className={styles.interaction__item}>
            <i className={styles.interaction__icon}>
              {item.icon}
            </i>
            {item.count && (
              <span className={styles.interaction__count}>
              {item.count}
            </span>
            )}
            {item.url && (
              <Link to={item.url}
                    className='stretched-link'>
                <span className='sr-only'>{item.label}</span>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

interface interaction {
  id: number
  icon: any
  count?: string
  label?: string
  url?: string
  className?: string
  click?: any
}

