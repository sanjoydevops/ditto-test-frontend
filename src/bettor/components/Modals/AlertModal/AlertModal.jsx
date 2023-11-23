import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { AppAction, FormAction } from '../../../store/actions';

const AlertModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector(state => state.app.toggle.alertModal);
  const showModal = !!data;
  const onModalClose = () => {
    if (data.formKey) {
      dispatch(FormAction.unsetForm(
        data.formKey,
      ));
    }
    dispatch(AppAction.toggle({
      key: 'alertModal',
      value: false,
    }));
    if (data.redirectTo) {
      history.push(data.redirectTo);
    }
  };
  return (
    <Modal centered className="success-modal" show={showModal} size="sm">
      <Modal.Body>
        {data.title && (
          <h3>{data.title}</h3>
        )}
        {data.message && (
          <h6>{data.message}</h6>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button className="close-alert" onClick={onModalClose} variant="link">
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;
