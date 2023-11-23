import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import PhoneInput from 'react-phone-input-2';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Registration.scss';
import aboutUs from '../../assets/img/AboutUs.png';
import dittoMarcNewWhiteLogoFinal from '../../assets/img/DittoMarc-new-white-logo-final.png';
import eyeOpenIcon from '../../assets/img/EyeOpenIcon.png';
import eyeSlashIcon from '../../assets/img/EyeSlashIcon.png';
import regIllustration from '../../assets/img/reg_illustration.png';

import AgreeCheckBox from '../../components/AgreeCheckBox';
import FooterBottom from '../../components/FooterBottom';
import { AppAction, AuthAction, FormAction } from '../../store/actions';
import useQueryParam from '../../../shared/hooks/useQueryParam';

const Registration = () => {
  const dispatch = useDispatch();
  const { errors, formKey, message } = useSelector(state => state.form.register || {});
  const phoneVerified = useSelector(state => state.app.toggle?.phoneVerified);
  const fromTeamId = useQueryParam('from_team_id');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
  const [agreedTermsAndConditions, setAgreedTermsAndConditions] = useState(false);
  const onClear = () => {
    setEmail('');
    setPhone('');
    setUsername('');
    setBirthDate('');
    setPassword('');
    setShowPassword(false);
    setPasswordConfirmation('');
    setShowPasswordConfirmation(false);
    setAgreedTermsAndConditions(false);
  };
  const onSubmit = event => {
    event.preventDefault();
    dispatch(AuthAction.register({
      birth_date: birthDate && birthDate.getFullYear() + '-' + String((birthDate.getMonth() + 1)).padStart(2, '0') + '-' + String(birthDate.getDate()).padStart(2, '0'),
      email,
      from_team_id: fromTeamId,
      password,
      password_confirmation: passwordConfirmation,
      phone,
      username,
    }));
  };
  const onSendOtp = () => dispatch(AuthAction.sendOtp({ phone }));
  useEffect(() => {
    return () => dispatch(FormAction.unsetForm(formKey));
  }, [dispatch, formKey]);
  useEffect(() => {
    if (errors === null) {
      onClear();
      dispatch(AppAction.toggle({
        key: 'alertModal',
        value: { formKey, message, redirectTo: '/login' },
      }));
    }
  }, [dispatch, errors, formKey, message]);
  return (
    <div className="wrapper">
      <div className="Registration__Background">
        <section className="Registration__Section">
          <div className="Registration__Inner">
            <h2 className="bg-green Registration__Inner__Head">Registration Form</h2>
            <div className="Registration__Body">
              <h6>Enter your information to create new account</h6>
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
                <div className="form-group">
                  <div className="input-group">
                    <PhoneInput
                      className={classNames({
                        'is-invalid': errors?.phone?.length,
                      })}
                      country="us"
                      countryCodeEditable={false}
                      enableSearch
                      name="phone"
                      onChange={setPhone}
                      placeholder="Phone"
                      preferredCountries={['us']}
                      value={phone}
                    />
                    <div className="invalid-feedback">
                      {errors?.phone?.join(' ')}
                    </div>
                    {!phoneVerified && (
                      <div className="input-group-append">
                        <button
                          className="input-group-text btn-send-otp"
                          disabled={!phone}
                          onClick={onSendOtp}
                          type="button"
                        >
                          Send OTP
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <input
                    className={classNames('form-control', {
                      'is-invalid': errors?.username?.length,
                    })}
                    name="username"
                    onChange={event => setUsername(event.target.value)}
                    placeholder="Username"
                    type="text"
                    value={username}
                  />
                  <div className="invalid-feedback">
                    {errors?.username?.join(' ')}
                  </div>
                </div>
                <div className="form-group">
                  <div className={classNames('position-relative', { 'is-invalid': errors?.birth_date?.length })}>
                    <DatePicker
                      className="form-control"
                      dropdownMode="select"
                      name="birth_date"
                      onChange={setBirthDate}
                      placeholderText="Date of Birth"
                      selected={birthDate}
                      showMonthDropdown
                      showYearDropdown
                    />
                    <i className="fas fa-calendar date-picker-icon"></i>
                  </div>
                  <div className="invalid-feedback">
                    {errors?.birth_date?.join(' ')}
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
                    placeholder="Confirm Password"
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
                <div className="form-row">
                  <div className="col-6">
                    <AgreeCheckBox
                      checked={agreedTermsAndConditions}
                      label="Agree with"
                      linkLabel="Terms &amp; Conditions"
                      linkTo="/terms-and-conditions"
                      message="Please select terms and conditions."
                      name="agreeTermsAndConditions"
                      onChange={setAgreedTermsAndConditions}
                    />
                  </div>
                  <div className="col-6">
                    <label className="form-check-label float-right Registration__Float">
                      <Link to="/login">
                        <span>Already Registerd? </span>
                        Login
                      </Link>
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-block bg-yellow mt-5 Registration__Button">
                  REGISTER
                </button>
              </form>
            </div>
          </div>
          <div className="Registration__Right text-center">
            <div className="Registration__Logo mb-2">
              <Link to="/">
                <img alt="logo" className="img-fluid" src={dittoMarcNewWhiteLogoFinal} />
              </Link>
            </div>
            <div className="Registration__Button__Create">
              <button className="btn btn-dark Registration__Btn__Create">
                <span className='d-none d-md-none d-lg-block'>
                  <i className="fas fa-arrow-circle-left"></i>
                </span>
                Create Account Now
                <span className='d-xl-none d-lg-none d-md-block ml-2'>
                  <i className="fas fa-arrow-circle-right"></i>
                </span>
              </button>
            </div>
            <div className="Registration__Img">
              <img alt="logo" className="img-fluid" src={regIllustration} />
            </div>
          </div>
        </section>
        <FooterBottom />
      </div>
    </div>
  );
};

export default Registration;
