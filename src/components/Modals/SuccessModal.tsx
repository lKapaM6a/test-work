import React, {FC} from 'react'
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from "react-redux";
import {Button, Modal} from 'antd';
import {setSuccessModal} from "../../store/reducers/modalsReducer";
import {RootState} from "../../store/store";
import {ReactComponent as CloseModal} from './icons/close-modal.svg'
import {ReactComponent as FeedbackIcon} from "./icons/feedback.svg";
import {ReactComponent as SuccessKiberImage} from "./icons/success-kiber-image.svg";
import styles from './modals.module.scss'


interface Props {
}

export const SuccessModal: FC<Props> = props => {
  const {} = props
  const {t} = useTranslation('translation', {keyPrefix: 'modals.success'});
  const isVisibleModal = useSelector((state: RootState) => state.modals.successModal)
  const dispatch = useDispatch()

  const handleOk = () => {
    isVisibleModal && dispatch(setSuccessModal(false))
  };

  const handleCancel = () => {
    isVisibleModal && dispatch(setSuccessModal(false))
  };

  const modalHeader = (
    <div className='ant-modal-title__content d-sm-none'>
      <i className='ant-modal-title__icon'>
        <FeedbackIcon/>
      </i>
      <div>
        {t('header')}
      </div>
    </div>
  )

  return (
    <>
      <Modal title={modalHeader}
             visible={isVisibleModal}
             onOk={handleOk}
             onCancel={handleCancel}
             footer={null}
             closeIcon={<CloseModal/>}
             width={399}
             centered
      >
        <div className={styles.success}>
          {t('title')}
        </div>

        <div className={`d-sm-none ${styles.success__image}`}>
          <SuccessKiberImage/>
        </div>
        <div className={`${styles.form__button} ${styles.success__button}`}>
          <Button onClick={() => handleOk()} type="primary">{t('button')}</Button>
        </div>
      </Modal>
    </>
  )
}