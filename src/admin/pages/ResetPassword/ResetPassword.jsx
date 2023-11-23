import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppAction, AuthAction } from '../../store/actions';
import useQueryParam from '../../../shared/hooks/useQueryParam';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { errors, formKey, message } = useSelector(state => state.form.resetPassword || {});
  const [email] = useState(useQueryParam('email'));
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [token] = useState(useQueryParam('token'));
  const onClear = () => {
    setPassword('');
    setPasswordConfirmation('');
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
    if (errors === null) {
      onClear();
      dispatch(AppAction.toggle({
        key: 'alertModal',
        value: { formKey, message },
      }));
    }
  }, [dispatch, errors, formKey, message]);
  return (
    <div className="login-page" style={{ minHeight: '398px' }}>
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <h1><b>Ditto</b> Admin</h1>
          </div>
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input
                  className={classNames('form-control', {
                    'is-invalid': errors?.password?.length,
                  })}
                  name="password"
                  onChange={event => setPassword(event.target.value)}
                  placeholder="New Password"
                  type="password"
                  value={password}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  className={classNames('form-control', {
                    'is-invalid': errors?.password_confirmation?.length,
                  })}
                  name="password_confirmation"
                  onChange={event => setPasswordConfirmation(event.target.value)}
                  placeholder="Confirm New Password"
                  type="password"
                  value={passwordConfirmation}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">
                    Reset Password
                  </button>
                </div>
              </div>
            </form>
            <p className="mt-3 mb-1">
              <Link to="/admin">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
