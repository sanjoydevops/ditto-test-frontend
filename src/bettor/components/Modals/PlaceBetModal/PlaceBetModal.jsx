import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'

import aboutUs from '../../../assets/img/AboutUs.png';

import AgreeCheckBox from '../../AgreeCheckBox';
import { AppAction, BetAction } from '../../../store/actions';

const PlaceBetModal = () => {
  const dispatch = useDispatch();
  const authUserProfile = useSelector(state => ({ ...state.auth.user?.profile }));
  const value = useSelector(state => state.app.toggle.placeBetModal);
  const { errors: formErrors, formKey, message } = useSelector(state => state.form.placeBet || {});
  const { team, type, user } = value;
  const showModal = !!value;
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [maxSpend, setMaxSpend] = useState('');
  const [coinType, setCoinType] = useState('');
  const [spread, setSpread] = useState('');
  const [odds, setOdds] = useState('');
  const [expirationTimeHours, setExpirationTimeHours] = useState('');
  const [expirationTimeMinutes, setExpirationTimeMinutes] = useState('');
  const [agreedTermsAndConditions, setAgreedTermsAndConditions] = useState(false);
  const [errors, setErrors] = useState(formErrors);
  const onClear = () => {
    setDescription('');
    setAmount('');
    setMaxSpend('');
    setCoinType('');
    setSpread('');
    setOdds('');
    setExpirationTimeHours('');
    setExpirationTimeMinutes('');
    setAgreedTermsAndConditions(false);
    setErrors();
  };
  const onModalClose = useCallback(() => {
    onClear();
    dispatch(AppAction.toggle({
      key: 'placeBetModal',
      value: false,
    }));
  }, [dispatch]);

  const onSubmit = event => {
    event.preventDefault();
    if (onValidate()) {
      Swal.fire({
        title: '',
        showCancelButton: true,
        html: `<span class="text-white">All bets are subject to all the terms and conditions. Would you like to proceed?</span>`,
        icon: 'question',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        customClass: {
          container: 'pop-up-container',
          popup: 'pop-up-box',
          confirmButton: 'btn-alart btn-alart-confirm',
          cancelButton: 'btn-alart btn-alart-cancel'
        }
      }).then((res) => {
        if(res.isConfirmed){
          Swal.fire({
              title: '',
              showCancelButton: true,
              html: `<span class="text-golden">All transactions are final. Are you sure that you want to proceed with this transaction?</span>`,
              icon: 'question',
              confirmButtonText: 'Yes',
              cancelButtonText: 'No',
              customClass: {
                container: 'pop-up-container',
                popup: 'pop-up-box',
                confirmButton: 'btn-alart btn-alart-confirm',
                cancelButton: 'btn-alart btn-alart-cancel'
              }
          }).then((res) => {
            if(res.isConfirmed){
              dispatch(BetAction.placeBet({
                description,
                amount,
                max_spend: maxSpend,
                coin_type: coinType,
                type,
                spread,
                odds,
                expiration_time_hours: expirationTimeHours,
                expiration_time_minutes: expirationTimeMinutes,
                to_team_id: team?.id,
                to_user_id: user?.id,
              }));
            }

          })
        }
      })
    }
  };
  const onValidate = () => {
    const validation = {};
    if (!amount.length) {
      validation.amount = ['The amount field is required.'];
    } else if (maxSpend.length && Number(amount) > Number(maxSpend)) {
      validation.amount = ['The amount must be less than or equal max spend.'];
    }
    if (!coinType.length) {
      validation.coin_type = ['The coin type field is required.'];
    }
    if (!description.length) {
      validation.description = ['The description field is required.'];
    }
    if (!expirationTimeMinutes.length && !expirationTimeHours.length) {
      validation.expiration_time_minutes = ['The expiration time minutes field is required when expiration time hours is empty.'];
    }
    if (!maxSpend.length) {
      validation.max_spend = ['The max spend field is required.'];
    } else if (amount.length && Number(maxSpend) < Number(amount)) {
      validation.max_spend = ['The max spend must be greater than or equal amount.'];
    } else if (amount.length && Number(maxSpend) % Number(amount) > 0) {
      validation.max_spend = ['The max spend should be divisible by amount.'];
    } else if (coinType.length) {
      const coinBalance = [
        1 === Number(coinType) && Number(authUserProfile.green_coin_balance),
        2 === Number(coinType) && Number(authUserProfile.red_coin_balance),
      ].find(i => i);
      if (Number(maxSpend) > coinBalance) {
        validation.max_spend = [`The max spend may not be greater than ${coinBalance}.`];
      }
    }
    if (odds.length) {
      if (!/\d+-\d+/.test(odds)) {
        validation.odds = ['The odds format is invalid.'];
      } else if (amount.length && maxSpend.length) {
        const [fromOdds] = odds.split('-');
        const oddsFrom = Number(fromOdds || 1);
        if ((Number(amount) * oddsFrom) > Number(maxSpend)) {
          validation.odds = [`Adjust odds, the amount must be less than or equal max spend.`];
        }
      }
    }
    setErrors(validation);
    return Object.keys(validation).length === 0;
  };
  useEffect(() => setErrors(formErrors), [formErrors]);
  useEffect(() => {
    if (errors === null) {
      onModalClose();
      dispatch(AppAction.toggle({
        key: 'alertModal',
        value: { formKey, message, redirectTo: '/bets' },
      }));
    }
  }, [dispatch, errors, formKey, message, onModalClose]);
  return (
    <Modal centered className="custom-modal" show={showModal}>
      <button type="button" className="close" onClick={onModalClose}>
        X
      </button>
      <Modal.Body>
        <div className="payment-modal">
          <h4>DittoBet Details</h4>
          <form className="custom-form" onSubmit={onSubmit}>
            <div className="form-group">
              <textarea
                className={classNames('form-control', {
                  'is-invalid': errors?.description?.length,
                })}
                maxLength="250"
                name="description"
                onChange={event => setDescription(event.target.value)}
                placeholder="DittoDescription (Max 250 Characters. Be direct, Be Specific, and Be Short)"
                rows="2"
                value={description}
              />
              <div className="invalid-feedback">
                {errors?.description?.join(' ')}
              </div>
            </div>
            <div className="form-group">
              <input
                className={classNames('form-control', {
                  'is-invalid': errors?.amount?.length,
                })}
                name="amount"
                onChange={event => setAmount(event.target.value)}
                placeholder="Amount"
                type="number"
                value={amount}
              />
              <div className="invalid-feedback">
                {errors?.amount?.join(' ')}
              </div>
              <div className="icon">
                <img alt="info" src={aboutUs} />
              </div>
            </div>
            <div className="form-group">
              <input
                className={classNames('form-control', {
                  'is-invalid': errors?.max_spend?.length,
                })}
                name="max_spend"
                onChange={event => setMaxSpend(event.target.value)}
                placeholder="Max Spend (Divisible by *Amount)"
                type="number"
                value={maxSpend}
              />
              <div className="invalid-feedback">
                {errors?.max_spend?.join(' ')}
              </div>
              <div className="icon">
                <img alt="info" src={aboutUs} />
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
                <option>Type</option>
                <option value="2">For Fun</option>
                <option value="1">For Profit</option>
              </select>
              <div className="invalid-feedback">
                {errors?.coin_type?.join(' ')}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  className={classNames('form-control', {
                    'is-invalid': errors?.spread?.length,
                  })}
                  name="spread"
                  onChange={event => setSpread(event.target.value)}
                  placeholder="Spread"
                  type="number"
                  value={spread}
                />
                <div className="invalid-feedback">
                  {errors?.spread?.join(' ')}
                </div>
              </div>
              <div className="form-group col-md-6">
                <input
                  className={classNames('form-control', {
                    'is-invalid': errors?.odds?.length,
                  })}
                  name="odds"
                  onChange={event => setOdds(event.target.value)}
                  pattern="\d+-\d+"
                  placeholder="Odds (Ex: 5-3)"
                  type="text"
                  value={odds}
                />
                <div className="invalid-feedback">
                  {errors?.odds?.join(' ')}
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md">
                <select
                  className={classNames('form-control', {
                    'is-invalid': errors?.expiration_time_hours?.length,
                  })}
                  name="expiration_time_hours"
                  onChange={event => {
                    const { value } = event.target;
                    setExpirationTimeHours(value);
                    if (Number(value) === 72) {
                      setExpirationTimeMinutes('');
                    }
                  }}
                  value={expirationTimeHours}
                >
                  <option value="">Expiration Time (Hours)</option>
                  {Array(72).fill(0).map((_, i) => (
                    <option key={i} value={++i}>{i}</option>
                  ))}
                </select>
                <div className="invalid-feedback">
                  {errors?.expiration_time_hours?.join(' ')}
                </div>
              </div>
              <div className="form-group col-md">
                <select
                  className={classNames('form-control', {
                    'is-invalid': errors?.expiration_time_minutes?.length,
                  })}
                  disabled={Number(expirationTimeHours) === 72}
                  name="expiration_time_minutes"
                  onChange={event => setExpirationTimeMinutes(event.target.value)}
                  value={expirationTimeMinutes}
                >
                  <option value="">Expiration Time (Minutes)</option>
                  {Array(59).fill(0).map((_, i) => (
                    <option key={i} value={++i}>{i}</option>
                  ))}
                </select>
                <div className="invalid-feedback">
                  {errors?.expiration_time_minutes?.join(' ')}
                </div>
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
            <div className="button mt-5">
              <button type="button" className="btn btn-modal-bet white" onClick={onClear}>
                Clear
              </button>
              <button type="submit" className="btn btn-modal-bet green float-right">
                Bet
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PlaceBetModal;
