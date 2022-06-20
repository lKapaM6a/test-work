import React, {FC} from 'react'
import {Menu, Dropdown} from 'antd';
import {ReactComponent as Arrow} from "../icons/dropdown-arrow.svg";
import {ReactComponent as ZeroPercent} from "../icons/0%.svg";
import {ReactComponent as Privat} from "../icons/privat.svg";
import {ReactComponent as Mono} from "../icons/mono.svg";
import styles from '../cards.module.scss'

interface Props {

}

export const CardInstallmentPlan: FC<Props> = props => {
  const {} = props

  const menu = (
    <Menu className={'ant-dropdown-menu__bordered'}>
      <Menu.Item key="0">
        <div className={'ant-dropdown-menu__item'}>
          <i>
            <ZeroPercent/>
          </i>
          <div className={'ant-dropdown-menu__item-content'}>
            <div className={'ant-dropdown-menu__item-title'}>Супер розстрочка!</div>
            <div>7 143 грн. х7 місяців</div>
          </div>
        </div>
      </Menu.Item>
      <Menu.Item key="1">
        <div className={'ant-dropdown-menu__item'}>
          <i>
            <Privat/>
          </i>
          <div className={'ant-dropdown-menu__item-content'}>
            <div className={'ant-dropdown-menu__item-title'}>ПриватБанк</div>
            <div>5 000 грн. х10 місяців</div>
          </div>
        </div>
      </Menu.Item>
      <Menu.Item key="2">
        <div className={'ant-dropdown-menu__item'}>
          <i>
            <Mono/>
          </i>
          <div className={'ant-dropdown-menu__item-content'}>
            <div className={'ant-dropdown-menu__item-title'}>Monobank</div>
            <div>7 143 грн. х7 місяців</div>
          </div>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.card__installmentPlan}>
      <Dropdown overlay={menu}
                trigger={["click"]}>
        <div className={`ant-dropdown__bordered unselectable ${styles.card__installmentPlanTrigger}`}
             onClick={e => e.preventDefault()}>
          Розстрочка 2 083 грн - 24 міс <Arrow className={'ant-dropdown__arrow'}/>
        </div>
      </Dropdown>
    </div>
  )
}