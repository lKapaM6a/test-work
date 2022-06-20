import React, {FC, useEffect, useState} from 'react'
import {useTranslation} from "react-i18next";
import InputMask from "react-input-mask";
import {useDispatch} from "react-redux";
import {Button, Form, Divider} from 'antd';
import {TimerFeedback} from "./TimerFeedback";
import {setFeedbackModal, setSuccessModal} from "../../../store/reducers/modalsReducer";
import {ReactComponent as FeedbackIcon} from '../icons/feedback.svg'
import {ReactComponent as OutbackIcon} from '../icons/outback.svg'
import styles from '../modals.module.scss'

interface Props {
}

interface FeedbackForm {
  userPhone: string
}

export const FeedbackForm: FC<Props> = props => {
  const {} = props

  const {t} = useTranslation('translation', {keyPrefix: 'modals.feedback'});
  const [form] = Form.useForm();
  const [limitsSend, setLimitsSend] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const dispatch = useDispatch()

  const onFinish = (values: FeedbackForm) => {
    console.log('Success:', values);

    setLoading(true)

    setTimeout(() => {
      dispatch(setFeedbackModal(false))
      setLimitsSend(true);
      setLoading(false);
      dispatch(setSuccessModal(true))
      form.resetFields();
    }, 5000)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const PHONE_MASK = '+38 099 999 99 99';

  return (
    <div className={styles.feedback}>
      {feedbackItems.map(item => (
        <div key={item.id}
             className={styles.recall}>
          {item.icon && (
            <i className={styles.recall__titleIcon}>
              {item.icon}
            </i>
          )}

          <div className={styles.recall__item}>
            <div className={styles.recall__phone}>
              {item.phone}

              {item.phoneUrl && (
                <a href={`tel:${item.phoneUrl}`} className='stretched-link'>
                  <span className='sr-only'>{item.phone}</span>
                </a>
              )}
            </div>

            {item.description && (
              <div className={styles.recall__time}>
                {t(item.description)}
              </div>
            )}

            {item.time && (
              <div className={styles.recall__time}>
                {t(item.time)}
              </div>
            )}
          </div>
        </div>
      ))}

      <Divider/>

      <div className={`${styles.recall} ${styles.recall__label}`}>
        <i className={styles.recall__titleIcon}>
          <FeedbackIcon/>
        </i>

        <div className={styles.recall__item}>
          <div className={`${styles.recall__title} mb-0`}>
            {t('recall')}
          </div>
        </div>
      </div>

      <Form form={form}
            name=""
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
        <div className={styles.form__item}>
          <Form.Item name="userPhone"
                     shouldUpdate
                     className={'mb-0'}
                     rules={[{
                       required: true,
                       message: t('phone-alert'),
                       min: PHONE_MASK.length
                     }]}>
            <InputMask className='ant-input'
                       disabled={loading || limitsSend}
                       maskPlaceholder={null}
                       mask={PHONE_MASK}
                       inputMode="numeric"
                       placeholder="+38 000 00 00 000"/>
          </Form.Item>

          <TimerFeedback limitsSend={limitsSend} setLimitsSend={setLimitsSend}/>
        </div>

        <div className={styles.form__button}>
          <Form.Item noStyle
                     shouldUpdate>
            {({getFieldsValue}) => {
              const {userPhone} = getFieldsValue();
              const formIsComplete = !!userPhone && userPhone.length === PHONE_MASK.length;
              return (
                <Button loading={loading}
                        type="primary"
                        htmlType="submit"
                        disabled={!formIsComplete || loading || limitsSend}>
                  {t('button')}
                </Button>
              );
            }}
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}

interface feedbackItems {
  id: number
  icon?: any
  phone?: string
  phoneUrl?: string
  description: string
  time?: string
}

const feedbackItems: feedbackItems[] = [
  {
    id: 1,
    icon: <OutbackIcon/>,
    phone: '+38 050-853-23-83',
    phoneUrl: '+380508532383',
    description: 'checkout',
    time: 'checkout_work_day'
  },
  {
    id: 2,
    icon: <OutbackIcon/>,
    phone: '0800-33-26-96',
    phoneUrl: '0800332696',
    description: 'support',
    time: 'support_work_day'
  }
]