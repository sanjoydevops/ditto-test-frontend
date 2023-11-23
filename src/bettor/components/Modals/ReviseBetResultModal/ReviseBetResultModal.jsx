import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import styles from './ReviseBetResultModal.module.scss';

import AgreeCheckBox from '../../AgreeCheckBox';
import { AppAction, BetAction } from '../../../store/actions';

const ReviseBetResultModal = () => {
  const dispatch = useDispatch();
  const authUserId = useSelector(state => state.auth.user.id);
  const bet = useSelector(state => state.app.toggle.reviseBetResultModal);
  const { errors, formKey, message } = useSelector(state => state.form.reviseBetResult || {});
  const showModal = !!bet;
  const prevResult = [
    bet?.bet_has_user?.result,
    bet?.users?.find?.(user => user?.id === authUserId)?.user_has_bet?.result,
  ].find(i => typeof i === 'number');
  const nextResult = prevResult === 1 ? 0 : 1;
  const [agreedTermsAndConditions, setAgreedTermsAndConditions] = useState(false);
  const onClear = () => {
    setAgreedTermsAndConditions(false);
  };
  const onModalClose = useCallback(() => {
    onClear();
    dispatch(AppAction.toggle({
      key: 'reviseBetResultModal',
      value: false,
    }));
  }, [dispatch]);
  const onSubmit = event => {
    event.preventDefault();
    dispatch(BetAction.reviseBetResult(bet?.id, { result: nextResult }));
  };
  useEffect(() => {
    if (errors === null) {
      onModalClose();
      dispatch(AppAction.toggle({
        key: 'alertModal',
        value: { formKey, message },
      }));
    }
  }, [dispatch, errors, formKey, message, onModalClose]);
  return (
    <Modal centered className="custom-modal" show={showModal}>
      <button type="button" className="close" onClick={onModalClose}>
        X
      </button>
      <Modal.Body>
        <form className={styles.ReviseBetResultModal} onSubmit={onSubmit}>
          <h4>Revise Bet Result</h4>
          <div className="radio">
            {[1, 0].map(i => (
              <div className={classNames('form-check form-check-inline', {
                'is-invalid': errors?.result?.length,
              })} key={i}>
                <input
                  defaultChecked={i === nextResult}
                  className="form-check-input"
                  disabled={i === prevResult}
                  id={`result-${i}`}
                  name="result"
                  type="radio"
                  value={i}
                />
                <label className="form-check-label" htmlFor={`result-${i}`}>
                  {1 === i && 'I am Winner'}
                  {0 === i && 'I am Non-Winner'}
                </label>
              </div>
            ))}
            <div className="invalid-feedback">
              {errors?.result?.join(' ')}
            </div>
          </div>
          <AgreeCheckBox
            checked={agreedTermsAndConditions}
            label="Agree with"
            linkLabel="Terms &amp; Conditions"
            linkTo="/terms-and-conditions"
            message="Please select terms and conditions."
            name="agreeTermsAndConditions"
            onChange={setAgreedTermsAndConditions}
          />
          <div className="d-flex justify-content-end mt-5">
            <button className="btn btn-modal-bet green" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ReviseBetResultModal;
