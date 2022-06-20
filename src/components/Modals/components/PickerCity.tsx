import React, {FC} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from "../../../store/store";
import {setCity} from '../../../store/reducers/cityReducer'
import {Radio} from 'antd';
import styles from '../modals.module.scss'

interface Props {

}

export const PickerCity: FC<Props> = props => {
  const {} = props

  const city = useSelector((state: RootState) => state.city)
  const dispatch = useDispatch()

  return (
    <div className={styles.picker}>
      <Radio.Group
        className={styles.picker__grid}
        value={city.city}
      >
        {radios.map(radio => (
          <Radio.Button key={radio.id} value={radio.value}
                        onClick={() => dispatch(setCity(radio.label))}>{radio.label}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  )
}

type cityRadio = {
  id: number
  value: string
  label: string
}

const radios: cityRadio[] = [
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
]