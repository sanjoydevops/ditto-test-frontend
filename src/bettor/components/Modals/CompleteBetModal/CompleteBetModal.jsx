import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import './CompleteBetModal.scss';

import AgreeCheckBox from '../../AgreeCheckBox';
import { AppAction, BetAction } from '../../../store/actions';
import BadgeImage from '../../../../shared/components/BadgeImage';
import { StarRatingInput } from '../../../../shared/components/StarRating';

const CompleteBetModal = () => {
  const dispatch = useDispatch();
  const bet = useSelector(state => state.app.toggle.completeBetModal);
  const { errors, formKey, message } = useSelector(state => state.form.completeBet || {});
  const showModal = !!bet;
  const [result, setResult] = useState();
  const [rating, setRating] = useState();
  const [badge, setBadge] = useState();
  const [agreedTermsAndConditions, setAgreedTermsAndConditions] = useState(false);
  const onClear = () => {
    setResult();
    setRating();
    setBadge();
    setAgreedTermsAndConditions(false);
  };
  const onIsBetInDispute = result => dispatch(BetAction.isBetInDispute(bet?.id, { result }));
  const onModalClose = useCallback(() => {
    onClear();
    dispatch(AppAction.toggle({
      key: 'completeBetModal',
      value: false,
    }));
  }, [dispatch]);
  const onSubmit = event => {
    event.preventDefault();
    dispatch(BetAction.completeBet(bet?.id, {
      result,
      ...(1 === result && {
        badge,
        rating,
      }),
    }));
  };
  useEffect(() => {
    bet?.dispute_confirmed === false && setResult(bet?.dispute_result ? 0 : 1);
  }, [bet?.dispute_confirmed, bet?.dispute_result]);
  useEffect(() => {
    if (errors === null) {
      onModalClose();
      dispatch(AppAction.toggle({
        key: 'alertModal',
        value: { formKey, message, redirectTo: '/bets?tab=completed-bets' },
      }));
    }
  }, [dispatch, errors, formKey, message, onModalClose]);
  return (
    <Modal centered className="custom-modal" show={showModal}>
      <button type="button" className="close" onClick={onModalClose}>
        X
      </button>
      <Modal.Body>
        <form className="modal-complete-bet" onSubmit={onSubmit}>
          <h4>Complete Bet</h4>
          <h6>The bet has been completed. I am the . . .</h6>
          <div className="radio">
            {[1, 0].map(i => (
              <div className={classNames('form-check form-check-inline', {
                'is-invalid': errors?.result?.length,
              })} key={i}>
                <input
                  checked={i === result}
                  className="form-check-input"
                  id={`result-${i}`}
                  name="result"
                  onChange={event => {
                    setResult(Number(event.target.value));
                    onIsBetInDispute(event.target.value);
                  }}
                  type="radio"
                  value={i}
                />
                <label className="form-check-label" htmlFor={`result-${i}`}>
                  {1 === i && 'Winner'}
                  {0 === i && 'Non-Winner'}
                </label>
              </div>
            ))}
            <div className="invalid-feedback">
              {errors?.result?.join(' ')}
            </div>
          </div>
          {1 === result && (<>
            <h6 className="box-title">Please Rate User</h6>
            <div className="box">
              <div className="star">
                <div className={classNames('text-center', {
                  'is-invalid': errors?.rating?.length,
                })}>
                  <StarRatingInput
                    onChange={setRating}
                    styleType="6"
                    value={rating}
                  />
                </div>
                <div className="invalid-feedback">
                  {errors?.rating?.join(' ')}
                </div>
              </div>
              <div className="bet text-center">
                {[3, 2, 1].map(i => (
                  <div className={classNames('bet-box', {
                    'is-invalid': errors?.badge?.length,
                  })} key={i}>
                    <input
                      checked={i === badge}
                      className="form-check-input"
                      id={`badge${i}`}
                      name="badge"
                      onChange={event => setBadge(Number(event.target.value))}
                      type="radio"
                      value={i}
                    />
                    <label htmlFor={`badge${i}`}>
                      <BadgeImage color="green" value={i} />
                      <span className="title">
                        {3 === i && 'Great'}
                        {2 === i && 'So-So'}
                        {1 === i && 'Sore Loser'}
                      </span>
                    </label>
                  </div>
                ))}
                <div className="invalid-feedback">
                  {errors?.badge?.join(' ')}
                </div>
              </div>
            </div>
          </>)}
          <AgreeCheckBox
            checked={agreedTermsAndConditions}
            label="Agree with"
            linkLabel="Terms &amp; Conditions"
            linkTo="/terms-and-conditions"
            message="Please select terms and conditions."
            name="agreeTermsAndConditions"
            onChange={setAgreedTermsAndConditions}
          />
          {bet.dispute_confirmed === true && (
            <p className="text-danger mt-3">
              Bet will be in dispute for 72 hours.
              Please select the correct result within 72 hours otherwise the admin will take steps.
            </p>
          )}
          <div className="button mt-5">
            <button className="btn btn-modal-bet white" onClick={onClear} type="button">
              Clear
            </button>
            <button className="btn btn-modal-bet green float-right" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CompleteBetModal;
