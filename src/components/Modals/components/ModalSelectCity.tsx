import React, {FC, useState} from 'react'
import {Select} from 'antd';
import {useTranslation} from "react-i18next";
import styles from '../modals.module.scss'
import {useDispatch} from "react-redux";
import {setCity} from "../../../store/reducers/cityReducer";

interface Props {

}

export const ModalSelectCity: FC<Props> = props => {
  const {} = props

  const dispatch = useDispatch()

  const {t} = useTranslation('translation', {keyPrefix: 'modals.city'});

  const {Option} = Select;

  return (
    <div className={styles.selectCity}>
      <Select
        showSearch
        showArrow={false}
        placeholder={t('placeholder')}
        optionFilterProp="children"
        onChange={(value: string) => dispatch(setCity(value))}
      >
        {selects.sort((a, b) => a.label.localeCompare(b.label)).map(select => (
          <Option key={select.id} value={select.value}>{select.label}</Option>
        ))}
      </Select>
    </div>
  )
}

type citySelect = {
  id: number
  value: string
  label: string
}

const selects: citySelect[] = [
  {
    id: 1,
    value: 'Київ',
    label: 'Київ'
  },
  {
    id: 2,
    value: 'Миколаїв',
    label: 'Миколаїв'
  },
  {
    id: 3,
    value: 'Нова Каховка',
    label: 'Нова Каховка'
  },
  {
    id: 4,
    value: 'Львів',
    label: 'Львів'
  },
  {
    id: 5,
    value: 'Херсон',
    label: 'Херсон'
  },
  {
    id: 6,
    value: 'Івано-Франківськ',
    label: 'Івано-Франківськ'
  },
  {
    id: 7,
    value: 'Дніпро',
    label: 'Дніпро'
  },
  {
    id: 8,
    value: 'Дніпродзержинськ',
    label: 'Дніпродзержинськ'
  },
  {
    id: 9,
    value: 'Дніприльстан, Дніпропетровська обл.',
    label: 'Дніприльстан, Дніпропетровська обл.'
  },
  {
    id: 10,
    value: 'Дніприльстан, Запорізька обл.',
    label: 'Дніприльстан, Запорізька обл.'
  },
]