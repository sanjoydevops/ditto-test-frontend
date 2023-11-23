import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppAction, AuthAction } from '../../store/actions';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const { errors, formKey, message } = useSelector(state => state.form.changePassword || {});
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const onClear = () => {
    setPassword('');
    setPasswordConfirmation('');
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
    <div className="row">
      <div className="col-4 mx-auto">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <h1>Change Password</h1>
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
                <div className="invalid-feedback">
                  {errors?.password?.join(' ')}
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
                <div className="invalid-feedback">
                  {errors?.password_confirmation?.join(' ')}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">Change password</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
