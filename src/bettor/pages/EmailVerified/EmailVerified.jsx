import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import dittoMarcNewWhiteLogoFinal from '../../assets/img/DittoMarc-new-white-logo-final.png';

const EmailVerified = () => {
  const history = useHistory();
  const authUser = useSelector(state => ({ ...state.auth.user }));
  useEffect(() => {
    if (authUser.is_logged_in) {
      history.push('/profile');
    }
  }, [history, authUser.is_logged_in]);
  return (
    <div className="EmailVerified">
      <div className="container-fluid opens-my">
        <div className="row">
          <div className="col-4 offset-4">
            <div className="my-5">
              <Link to="/">
                <img alt="logo" className="img-fluid" src={dittoMarcNewWhiteLogoFinal} />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="my-5 text-center text-light">
              <h3>You have successfully verified your email address.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerified;
