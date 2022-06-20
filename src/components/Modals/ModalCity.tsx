import React, {FC, useState} from 'react'
import {useTranslation} from 'react-i18next';
import {Modal} from 'antd';
import {PickerCity} from "./components/PickerCity";
import {useDispatch, useSelector} from "react-redux";
import {ModalDescription} from "./components/ModalDescription";
import {ModalSelectCity} from "./components/ModalSelectCity";
import {RootState} from "../../store/store";
import {setCityModal} from "../../store/reducers/modalsReducer";
import {ReactComponent as CloseModal} from './icons/close-modal.svg'
import {ReactComponent as LocationIcon} from './icons/location.svg'
import styles from './modals.module.scss'

interface Props {

}

export const ModalCity: FC<Props> = props => {
  const {} = props
  const {t} = useTranslation('translation', {keyPrefix: 'modals.city'});

  const isVisibleModal = useSelector((state: RootState) => state.modals.cityModal)

  const dispatch = useDispatch()

  const handleOk = () => {
    isVisibleModal && dispatch(setCityModal(false))
  };

  const handleCancel = () => {
    isVisibleModal && dispatch(setCityModal(false))
  };

  const city = useSelector((state: RootState) => state.city)

  const modalHeader = (
    <div className='ant-modal-title__content'>
      <i className='ant-modal-title__icon d-sm-none'>
        <LocationIcon/>
      </i>
      <div>
        {t('header')}:&nbsp;
        <span className='fw-600'>{city.city}</span>
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
        <div className={'form-group'}>
          <ModalSelectCity/>
        </div>

        <div className={'form-group'}>
          <PickerCity/>
        </div>

        <ModalDescription/>
      </Modal>
    </>
  )
}