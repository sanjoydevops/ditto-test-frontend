import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AuthAction, FormAction } from '../../store/actions';

const Login = () => {
  const dispatch = useDispatch();
  const { errors, formKey, message } = useSelector(state => state.form.login || {});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onClear = () => {
    setEmail('');
    setPassword('');
  };
  const onSubmit = event => {
    event.preventDefault();
    dispatch(AuthAction.login({
      email,
      password,
    }));
  };
  useEffect(() => {
    if (errors === null) {
      onClear();
      dispatch(FormAction.unsetForm(
        formKey,
      ));
    }
  }, [dispatch, errors, formKey, message]);
  return (
    <div className="login-page" style={{ minHeight: '466px' }}>
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
                  type="text"
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
              <div className="input-group mb-3">
                <input
                  className={classNames('form-control', {
                    'is-invalid': errors?.password?.length,
                  })}
                  name="password"
                  onChange={event => setPassword(event.target.value)}
                  placeholder="Password"
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
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                </div>
              </div>
            </form>
            <p className="mt-3 mb-1">
              <Link to="/admin/forgot-password">
                Forgot Password?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
