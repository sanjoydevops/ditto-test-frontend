import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Login.scss';
import dittoMarcNewWhiteLogoFinal from '../../assets/img/DittoMarc-new-white-logo-final.png';
import eyeOpenIcon from '../../assets/img/EyeOpenIcon.png';
import eyeSlashIcon from '../../assets/img/EyeSlashIcon.png';
import loginIllustration from '../../assets/img/login_illustration.png';

import FooterBottom from '../../components/FooterBottom';
import { AuthAction, FormAction } from '../../store/actions';

const Login = () => {
  const dispatch = useDispatch();
  const { errors, formKey, message } = useSelector(state => state.form.login || {});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const onClear = () => {
    setUsername('');
    setPassword('');
    setShowPassword(false);
  };
  const onSubmit = event => {
    event.preventDefault();
    dispatch(AuthAction.login({
      username,
      password,
    }));
  };
  useEffect(() => {
    return () => dispatch(FormAction.unsetForm(formKey));
  }, [dispatch, formKey]);
  useEffect(() => {
    if (errors === null) {
      onClear();
      dispatch(FormAction.unsetForm(
        formKey,
      ));
    }
  }, [dispatch, errors, formKey, message]);
  return (
    <div className="Login__Background">
      <div className="Login__Main__Section Login__Page__Field">
        <div className="Login__Left__Explore text-center">
          <Link to="/">
            <img alt="logo" className="Login__Logo mb-2" src={dittoMarcNewWhiteLogoFinal} />
          </Link>
          <br />
          <button className="Login__Rounded__Pill btn btn-dark">
            Login To Explore
            <span>
              <i className="fas fa-arrow-circle-right"></i>
            </span>
          </button>
          <div className="Login__Img mt-2">
            <img src={loginIllustration} alt="login_image" className="img-fluid" />
          </div>
        </div>
        <div className="Login__Form__Background rounded">
          <form className="custom-form" onSubmit={onSubmit}>
            <div className="Login__Head text-center">
              <h3>Login Form</h3>
            </div>
            <div className="Login__Input__Field__Background rounded">
              <h6 className="credentials">Enter your credentials to login</h6>
              <div className="form-group">
                <input
                  className={classNames('form-control', {
                    'is-invalid': errors?.username?.length,
                  })}
                  name="username"
                  onChange={event => setUsername(event.target.value)}
                  placeholder="Email Address or Phone Number"
                  type="text"
                  value={username}
                />
                <div className="invalid-feedback">
                  {errors?.username?.join(' ')}
                </div>
              </div>
              <div className="form-group">
                <input
                  className={classNames('form-control', {
                    'is-invalid': errors?.password?.length,
                  })}
                  name="password"
                  onChange={event => setPassword(event.target.value)}
                  placeholder="Password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                />
                <div className="invalid-feedback">
                  {errors?.password?.join(' ')}
                </div>
                <div className="icon" onClick={() => setShowPassword(!showPassword)} role="button">
                  <img alt="icon" src={showPassword ? eyeOpenIcon : eyeSlashIcon} />
                </div>
              </div>
              <div className="form-group">
                <Link to="/forgot-password" className="Login__Forgot__Password">
                  Forgot Password ?
                </Link>
                <Link className="Login__Create__Account" to="/registration">
                  Create New Account
                </Link>
              </div>
              <div className="Login__Log__Btn">
                <button className="btn Login__Button text-center btn-block bg-yellow" type="submit">
                  LOGIN
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
};

export default Login;
