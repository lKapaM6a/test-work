import React, {FC, useState} from 'react'
import {Form} from "antd"
import {Radio} from 'antd';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './radioPicker.module.scss'

interface Props {

}

export const RadioPicker: FC<Props> = props => {
  const {} = props

  const [form] = Form.useForm();

  const [value, setValue] = useState();

  const onChange = (e: any) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <Form form={form}>
        <Radio.Group onChange={onChange} value={value ? value : 'Все категории'}
                     className={styles.items}>
          <Swiper className={styles.slider}
                  onSlideChange={(swiper) => {
                    swiper.update()
                  }}
                  slidesPerView='auto'>
            {radios.map(radio => (
              <SwiperSlide className={styles.slide}
                           key={radio.id}>
                <Radio.Button
                  className={`ant-radio-button-wrapper--rounded ant-radio-button-wrapper--white`}
                  value={radio.value}
                  onClick={() => null}>
                  {radio.label}
                </Radio.Button>
              </SwiperSlide>
            ))}
          </Swiper>
        </Radio.Group>
      </Form>
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
    value: 'Все категории',
    label: 'Все категории'
  },
  {
    id: 2,
    value: 'Телефоны',
    label: 'Телефоны'
  },
  {
    id: 3,
    value: 'Ноутбуки',
    label: 'Ноутбуки'
  },
  {
    id: 4,
    value: 'Планшеты',
    label: 'Планшеты'
  },
  {
    id: 5,
    value: 'Телефоны 2',
    label: 'Телефоны'
  },
  {
    id: 6,
    value: 'Ноутбуки 2',
    label: 'Ноутбуки'
  },
  {
    id: 7,
    value: 'Планшеты 2',
    label: 'Планшеты'
  },
  {
    id: 8,
    value: 'Телефоны 3',
    label: 'Телефоны'
  },
  {
    id: 9,
    value: 'Ноутбуки 3',
    label: 'Ноутбуки'
  },
  {
    id: 10,
    value: 'Планшеты 3',
    label: 'Планшеты'
  },
  {
    id: 11,
    value: 'Телефоны 4',
    label: 'Телефоны'
  },
  {
    id: 12,
    value: 'Ноутбуки 4',
    label: 'Ноутбуки'
  },
  {
    id: 13,
    value: 'Планшеты 4',
    label: 'Планшеты'
  }
]
