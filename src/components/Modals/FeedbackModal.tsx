import React, {FC} from 'react'
import {useTranslation} from 'react-i18next';
import {Modal} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {FeedbackForm} from "./components/FeedbackForm";
import {RootState} from "../../store/store";
import {setFeedbackModal} from "../../store/reducers/modalsReducer";
import {ReactComponent as CloseModal} from './icons/close-modal.svg'
import {ReactComponent as FeedbackIcon} from './icons/feedback.svg'
import styles from './modals.module.scss'

interface Props {
}

export const FeedbackModal: FC<Props> = props => {
  const {} = props
  const {t} = useTranslation('translation', {keyPrefix: 'modals.feedback'});

  const isVisibleModal = useSelector((state: RootState) => state.modals.feedbackModal)
  const dispatch = useDispatch()

  const handleOk = () => {
    isVisibleModal && dispatch(setFeedbackModal(false))
  };

  const handleCancel = () => {
    isVisibleModal && dispatch(setFeedbackModal(false))
  };

  const modalHeader = (
    <div className='ant-modal-title__content'>
      <i className='ant-modal-title__icon d-sm-none'>
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
        <FeedbackForm />
      </Modal>
    </>
  )
}