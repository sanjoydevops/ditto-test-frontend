import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import styles from './ConfirmBetDisputeModal.module.scss';

import { AppAction } from '../../../store/actions';

const ConfirmBetDisputeModal = () => {
  const dispatch = useDispatch();
  const bet = useSelector(state => state.app.toggle.confirmBetDisputeModal);
  const showModal = !!bet;
  const onModalClose = () => dispatch(AppAction.toggle({
    key: 'confirmBetDisputeModal',
    value: false,
  }));
  const onModalData = dispute_confirmed => dispatch(AppAction.toggle({
    key: 'completeBetModal',
    value: { ...bet, dispute_confirmed },
  }));
  const onCancel = () => {
    onModalData(false);
    onModalClose();
  };
  const onConfirm = () => {
    onModalData(true);
    onModalClose();
  };
  return (
    <Modal centered className="custom-modal" show={showModal}>
      <Modal.Body>
        <div className={styles.ConfirmBetDisputeModal}>
          <h3 className="text-center">
            Are you sure you are
            {' '}
            {bet?.dispute_result === 1 ? 'Winner' : 'Non-Winner'}
            ?
          </h3>
          <div className="d-flex justify-content-between mt-5">
            <button className="btn btn-modal-bet white" onClick={onCancel} type="button">
              No, I am not.
            </button>
            <button className="btn btn-modal-bet green" onClick={onConfirm} type="button">
              Yes, I am.
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmBetDisputeModal;
