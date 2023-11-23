import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppAction, AuthAction } from '../../store/actions';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { errors, formKey, message } = useSelector(state => state.form.forgotPassword || {});
  const [email, setEmail] = useState('');
  const onClear = () => {
    setEmail('');
  };
  const onSubmit = event => {
    event.preventDefault();
    dispatch(AuthAction.forgotPassword({
      email,
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
    <div className="login-page" style={{ minHeight: '320px' }}>
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
                    'is-invalid': errors?.email?.length,
                  })}
                  name="email"
                  onChange={event => setEmail(event.target.value)}
                  placeholder="Email"
                  type="email"
                  value={email}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
                <div className="invalid-feedback">
                  {errors?.email?.join(' ')}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">
                    Send Password Reset Email
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

export default ForgotPassword;
