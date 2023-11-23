import React from 'react';
import { Link } from 'react-router-dom';

import './VerificationMail.scss';
import dittoMarcNewWhiteLogoFinal from '../../assets/img/DittoMarc-new-white-logo-final.png';

import FooterBottom from '../../components/FooterBottom';

const VerificationMail = () => (
  <div className="container-fluid VerificationMail">
    <section className="VerificationMail-inner">
      <div className="VerificationMail-header">
        <Link to="/">
          <img alt="logo" src={dittoMarcNewWhiteLogoFinal} />
        </Link>
      </div>
      <div className="VerificationMail-body">
        <div className="VerificationMail-body-inner">
          <h3>Hello</h3>
          <p>Click Here To Confirm Your Account:</p>
          <div className="button-sec">
            <Link to="/otp-verification">
              <button type="button" className="accept-btn">
                Confirm
              </button>
            </Link>
          </div>
          <div className="VerificationMail-footer">
            <p>
              Thanks,<br />Dittomarc
            </p>
          </div>
        </div>
      </div>
    </section>
    <FooterBottom />
  </div>
);

export default VerificationMail;
