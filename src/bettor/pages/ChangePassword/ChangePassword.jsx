import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import './ChangePassword.scss';
import aboutUs from '../../assets/img/AboutUs.png';
import eyeOpenIcon from '../../assets/img/EyeOpenIcon.png';
import eyeSlashIcon from '../../assets/img/EyeSlashIcon.png';

import { AppAction, AuthAction } from '../../store/actions';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const { errors, formKey, message } = useSelector(state => state.form.changePassword || {});
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
  const onClear = () => {
    setPassword('');
    setShowPassword(false);
    setPasswordConfirmation('');
    setShowPasswordConfirmation(false);
  };
  const onSubmit = event => {
    event.preventDefault();
    dispatch(AuthAction.changePassword({
      password,
      password_confirmation: passwordConfirmation,
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
    <div className="container opens-my">
      <div className="row">
        <div className="col-md-9 col-lg-7 mx-auto">
          <div className="change-pass-main">
            <div className="title">
              Change Password
            </div>
            <div className="change-pass-inner">
              <h6 className="tagline">Change your password here</h6>
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
                    <OverlayTrigger overlay={<Tooltip>Password should be minimum 8 characters with special character, capital and small letter and number. Like: Ditto@123</Tooltip>}>
                      <img
                        alt="info"
                        role="button"
                        src={aboutUs}
                      />
                    </OverlayTrigger>
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
                  Change
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
