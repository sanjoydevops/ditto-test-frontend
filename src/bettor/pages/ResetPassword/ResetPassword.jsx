import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './ResetPassword.scss';
import aboutUs from '../../assets/img/AboutUs.png';
import eyeOpenIcon from '../../assets/img/EyeOpenIcon.png';
import eyeSlashIcon from '../../assets/img/EyeSlashIcon.png';

import { AppAction, AuthAction, FormAction } from '../../store/actions';
import useQueryParam from '../../../shared/hooks/useQueryParam';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { errors, formKey, message } = useSelector(state => state.form.resetPassword || {});
  const [email] = useState(useQueryParam('email'));
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
  const [token] = useState(useQueryParam('token'));
  const onClear = () => {
    setPassword('');
    setShowPassword(false);
    setPasswordConfirmation('');
    setShowPasswordConfirmation(false);
  };
  const onSubmit = event => {
    event.preventDefault();
    dispatch(AuthAction.resetPassword({
      email,
      password,
      password_confirmation: passwordConfirmation,
      token,
    }));
  };
  useEffect(() => {
    return () => dispatch(FormAction.unsetForm(formKey));
  }, [dispatch, formKey]);
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
    <div className="container opens-my">
      <div className="row">
        <div className="col-md-9 col-lg-7 mx-auto">
          <div className="change-pass-main">
            <div className="title">
              Reset Password
            </div>
            <div className="change-pass-inner">
              <h6 className="tagline">Reset your password here</h6>
              <form className="custom-form" onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    className={classNames('form-control', {
                      'is-invalid': errors?.password?.length,
                    })}
                    name="password"
                    onChange={event => setPassword(event.target.value)}
                    placeholder="New Password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                  />
                  <div className="invalid-feedback">
                    {errors?.password?.join(' ')}
                  </div>
                  <div className="icon">
                    <img
                      alt="info"
                      role="button"
                      src={aboutUs}
                      title="Password should be minimum 8 characters with special character, capital and small letter and number. Like: Ditto@123"
                    />
                    {' '}
                    <img
                      alt="show password"
                      onClick={() => setShowPassword(!showPassword)}
                      role="button"
                      src={showPassword ? eyeOpenIcon : eyeSlashIcon}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    className={classNames('form-control', {
                      'is-invalid': errors?.password_confirmation?.length,
                    })}
                    name="password_confirmation"
                    onChange={event => setPasswordConfirmation(event.target.value)}
                    placeholder="Confirm New Password"
                    type={showPasswordConfirmation ? 'text' : 'password'}
                    value={passwordConfirmation}
                  />
                  <div className="invalid-feedback">
                    {errors?.password_confirmation?.join(' ')}
                  </div>
                  <div className="icon" onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)} role="button">
                    <img alt="icon" src={showPasswordConfirmation ? eyeOpenIcon : eyeSlashIcon} />
                  </div>
                </div>
                <button type="submit" className="btn btn-block bg-yellow btn-change-pass">
                  Reset
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
