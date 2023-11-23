import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { AppAction, UserAction } from '../../../store/actions';

const ReferModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.app.toggle.referModal);
  const { errors, formKey, message } = useSelector(state => state.form.referUser || {});
  const [emailPhone, setEmailPhone] = useState('');
  const onClear = () => {
    setEmailPhone('');
  };
  const onModalClose = () => dispatch(AppAction.toggle({
    key: 'referModal',
    value: false,
  }));
  const onSubmit = event => {
    event.preventDefault();
    dispatch(UserAction.referUser({
      email_phone: emailPhone,
    }));
  };
  useEffect(() => {
    if (errors === null) {
      onClear();
      dispatch(AppAction.toggle({
        key: 'alertModal',
        value: { formKey, message },
      }));
    }
  }, [dispatch, errors, formKey, message]);
  return (
    <Modal centered className="custom-modal" show={showModal}>
      <button type="button" className="close" onClick={onModalClose}>
        X
      </button>
      <Modal.Body>
        <div className="team-modal">
          <h4>Refer Your Friends And Family</h4>
          <form className="custom-form" onSubmit={onSubmit}>
            <div className="form-group">
              <input
                className={classNames('form-control', {
                  'is-invalid': errors?.email_phone?.length,
                })}
                name="email_phone"
                onChange={event => setEmailPhone(event.target.value)}
                placeholder="Email Address or Phone Number"
                type="text"
                value={emailPhone}
              />
              <div className="invalid-feedback">
                {errors?.email_phone?.join(' ')}
              </div>
            </div>
            <div className="modal-team-label">
              <label>e.g:<span> dummy@gmail.com</span> or <span>+11234567890</span></label>
            </div>
            <div className="button">
              <button type="button" className="btn btn-modal-bet white" onClick={onModalClose}>
                Close
              </button>
              <button type="submit" className="btn btn-modal-bet green float-right">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ReferModal;
