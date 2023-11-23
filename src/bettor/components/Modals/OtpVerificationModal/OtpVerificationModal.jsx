import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './OtpVerificationModal.scss';

import CustomModal from '../CustomModal';
import { AuthAction } from '../../../store/actions';
import useTimeLeft from '../../../../shared/hooks/useTimeLeft';

const OtpVerificationModal = () => {
  const dispatch = useDispatch();
  const key = 'otpVerificationModal';
  const data = useSelector(state => ({ ...state.app.toggle?.[key] }));
  const [otp, setOtp] = useState({});
  const [timeLeft, resetTimeLeft, showTimeLeft] = useTimeLeft(60);
  const onChange = event => {
    const { form, name, value } = event.target;
    const index = [...form].indexOf(event.target);
    form.elements[index + 1].focus();
    setOtp({ ...otp, [name]: value });
  }
  const onSendOtp = () => {
    dispatch(AuthAction.sendOtp({ phone: data.phone }));
    resetTimeLeft();
  };
  const onSubmit = event => {
    event.preventDefault();
    dispatch(AuthAction.verifyOtp({ otp: Object.values(otp).join(''), phone: data.phone }));
  };
  return (
    <CustomModal name={key}>
      <div className="OtpVerificationModal">
        <div className="regField">
          <div className="regHeader">
            <h2>OTP Verification</h2>
            <div className="regBody">
              <h5>
                One time password has been sent to
                <br />
                <strong>{data.phone}</strong>
              </h5>
              <form className="custom-form" onSubmit={onSubmit}>
                <div className="otp-ibput-sec">
                  <label>Enter the OTP</label>
                  <div className="otp-input-box">
                    <input
                      maxLength="1"
                      name="a"
                      onChange={onChange}
                      pattern="\d"
                      type="text"
                    />
                    <input
                      maxLength="1"
                      name="b"
                      onChange={onChange}
                      pattern="\d"
                      type="text"
                    />
                    <input
                      maxLength="1"
                      name="c"
                      onChange={onChange}
                      pattern="\d"
                      type="text"
                    />
                    <input
                      maxLength="1"
                      name="d"
                      onChange={onChange}
                      pattern="\d"
                      type="text"
                    />
                    <input
                      maxLength="1"
                      name="e"
                      onChange={onChange}
                      pattern="\d"
                      type="text"
                    />
                    <input
                      maxLength="1"
                      name="f"
                      onChange={onChange}
                      pattern="\d"
                      type="text"
                    />
                  </div>
                </div>
                <div className="otp-form-footer">
                  {showTimeLeft()}
                  <button className="resend-otp-btn" disabled={timeLeft > 0} onClick={onSendOtp} type="button">
                    <span>Didn't get OTP? </span>Resend Code
                  </button>
                </div>
                <button type="submit" className="btn btn-block bg-yellow regButton">
                  Verify
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default OtpVerificationModal;
