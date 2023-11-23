import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';

import { AppAction, PaymentAction } from '../../../store/actions';

const AddPaymentCardModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.app.toggle.addPaymentCardModal);
  const { errors, formKey, message } = useSelector(state => state.form.addPaymentCard || {});
  const [cardType, setCardType] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const onClear = () => {
    setCardType('');
    setCardHolderName('');
    setCardNumber('');
    setExpiryDate('');
    setSecurityCode('');
  };
  const onModalClose = () => dispatch(AppAction.toggle({
    key: 'addPaymentCardModal',
    value: false,
  }));
  const onSubmit = event => {
    event.preventDefault();
    dispatch(PaymentAction.addPaymentCard({
      card_type: cardType,
      card_holder_name: cardHolderName,
      card_number: cardNumber,
      expiry_date: expiryDate,
      security_code: securityCode,
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
      <button
        className="close"
        onClick={onModalClose}
        type="button"
      >
        X
      </button>
      <Modal.Body>
        <div className="payment-modal">
          <h4>Add Payment Card</h4>
          <form className="custom-form" onSubmit={onSubmit}>
            <div className="form-group">
              <input
                className={classNames('form-control', {
                  'is-invalid': errors?.card_type?.length,
                })}
                name="card_type"
                onChange={event => setCardType(event.target.value)}
                placeholder="Card Type *"
                type="text"
                value={cardType}
              />
              <div className="invalid-feedback">
                {errors?.card_type?.join(' ')}
              </div>
            </div>
            <div className="form-group">
              <input
                className={classNames('form-control', {
                  'is-invalid': errors?.card_holder_name?.length,
                })}
                name="card_holder_name"
                onChange={event => setCardHolderName(event.target.value)}
                placeholder="Card Holder Name *"
                type="text"
                value={cardHolderName}
              />
              <div className="invalid-feedback">
                {errors?.card_holder_name?.join(' ')}
              </div>
            </div>
            <div className="form-group">
              <input
                className={classNames('form-control', {
                  'is-invalid': errors?.card_number?.length,
                })}
                name="card_number"
                onChange={event => setCardNumber(event.target.value)}
                placeholder="Card Number *"
                type="text"
                value={cardNumber}
              />
              <div className="invalid-feedback">
                {errors?.card_number?.join(' ')}
              </div>
            </div>
            <div className="form-group">
              <div className={classNames('position-relative', { 'is-invalid': errors?.expiry_date?.length })}>
                <DatePicker
                  className="form-control"
                  dropdownMode="select"
                  name="expiry_date"
                  onChange={setExpiryDate}
                  placeholderText="Expiry Date *"
                  selected={expiryDate}
                  showMonthDropdown
                  showYearDropdown
                />
                <i className="fas fa-calendar date-picker-icon"></i>
              </div>
              <div className="invalid-feedback">
                {errors?.expiry_date?.join(' ')}
              </div>
              <div className="f-alert">e.g: <span>12/2026</span></div>
            </div>
            <div className="form-group">
              <input
                className={classNames('form-control', {
                  'is-invalid': errors?.security_code?.length,
                })}
                name="security_code"
                onChange={event => setSecurityCode(event.target.value)}
                placeholder="Security Code *"
                type="text"
                value={securityCode}
              />
              <div className="invalid-feedback">
                {errors?.security_code?.join(' ')}
              </div>
            </div>
            <div className="button mt-5">
              <button
                className="btn btn-modal-bet white"
                onClick={onClear}
                type="button"
              >
                Clear
              </button>
              <button
                className="btn btn-modal-bet green float-right"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddPaymentCardModal;
