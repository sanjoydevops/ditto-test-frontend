import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { AppAction } from '../../store/actions';

const CustomModal = ({ children, name }) => {
  const dispatch = useDispatch();
  const showModal = useSelector(state => !!state.app.toggle?.[name]);
  const onModalClose = () => dispatch(AppAction.toggle({ key: name, value: false }));
  return (
    <Modal centered className="custom-modal" show={showModal}>
      <button className="close" onClick={onModalClose} type="button">X</button>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default CustomModal;
