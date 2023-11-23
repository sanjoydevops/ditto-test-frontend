import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import './ForgotPassword.scss';
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
    <div className="container opens-my">
      <div className="row">
        <div className="col-md-9 col-lg-7 mx-auto">
          <div className="change-pass-main">
            <div className="title">
              Forgot Password?
            </div>
            <div className="change-pass-inner">
              <h6 className="tagline">Forgot your password? Reset from here.</h6>
              <form className="custom-form" onSubmit={onSubmit}>
                <div className="form-group">
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
                  <div className="invalid-feedback">
                    {errors?.email?.join(' ')}
                  </div>
                </div>
                <button type="submit" className="btn btn-block bg-yellow btn-change-pass">
                  Send Reset Email
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
