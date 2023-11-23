import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { AppAction, TransactionAction } from '../../../store/actions';

const AddTransactionModal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.app.toggle.addTransactionModal);
  const { errors, formKey, message } = useSelector(state => state.form.addTransaction || {});
  const [type, setType] = useState('');
  const [coinType, setCoinType] = useState('');
  const [coin, setCoin] = useState('');
  const amount = coin / 10;
  const commission = [
    '1' === type && '1' === coinType && amount <= 300 && 2.99,
    '1' === type && '1' === coinType && amount > 300 && (amount * 0.01),
    '1' === type && '2' === coinType && 1.99,
    0,
  ].find(i => typeof i === 'number');
  const total = amount + commission;
  const onClear = () => {
    setType('');
    setCoinType('');
    setCoin('');
  };
  const onModalClose = () => dispatch(AppAction.toggle({
    key: 'addTransactionModal',
    value: false,
  }));
  const onSubmit = event => {
    event.preventDefault();
    dispatch(TransactionAction.addTransaction({
      type,
      coin_type: coinType,
      coin,
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
          <h4>Add Transaction</h4>
          <form className="custom-form" onSubmit={onSubmit}>
            <div className="form-group">
              <select
                className={classNames('form-control', {
                  'is-invalid': errors?.type?.length,
                })}
                name="type"
                onChange={event => setType(event.target.value)}
                value={type}
              >
                <option>Transaction Type</option>
                <option value="1">Deposit</option>
                <option value="2">Cash Out</option>
              </select>
              <div className="invalid-feedback">
                {errors?.type?.join(' ')}
              </div>
            </div>
            <div className="form-group">
              <select
                className={classNames('form-control', {
                  'is-invalid': errors?.coin_type?.length,
                })}
                name="coin_type"
                onChange={event => setCoinType(event.target.value)}
                value={coinType}
              >
                <option>DittoCoin Type</option>
                <option value="1">Profit Coin</option>
                <option value="2">Fun Coin</option>
              </select>
              <div className="invalid-feedback">
                {errors?.coin_type?.join(' ')}
              </div>
            </div>
            <div className="form-group">
              <input
                className={classNames('form-control', {
                  'is-invalid': errors?.coin?.length,
                })}
                min="100"
                name="coin"
                onChange={event => setCoin(event.target.value ? Math.round(event.target.value) : '')}
                placeholder="DittoCoin"
                type="number"
                value={coin}
              />
              <div className="invalid-feedback">
                {errors?.coin?.join(' ')}
              </div>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                disabled
                placeholder="Amount"
                readOnly
                type="text"
                value={coin ? amount.toFixed(2) : ''}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                disabled
                placeholder="Commission"
                readOnly
                type="text"
                value={coin ? commission.toFixed(2) : ''}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                disabled
                placeholder="Total"
                readOnly
                type="text"
                value={coin ? total.toFixed(2) : ''}
              />
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

export default AddTransactionModal;
