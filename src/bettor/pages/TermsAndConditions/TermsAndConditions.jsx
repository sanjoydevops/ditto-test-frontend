import React from 'react';

import termsOfService from '../../assets/pdf/terms-of-service.pdf';
// import termsnConditionIcon from '../../assets/img/TermsnConditionIcon.svg';

const TermsAndConditions = () => (
  <div className="container w-1295 opens-my">
    <div className="dash-content">
      <div className="row">
        <div className="col">
          <div className="dash-content-head">
            {/* <h5><img alt="terms and conditions" src={termsnConditionIcon} style={{ color: '#fff' }} /> Terms and Conditions</h5> */}
            <h5> Terms and Conditions</h5>
          </div>
          <div className="condition-inner" style={{ width: '100%' }}>
            <div className="row">
              <div className="col">
                <div className="dash-content-inner custom-form" style={{ paddingTop: '15px' }}>
                  <object
                    data={`${termsOfService}#navpanes=1&scrollbar=1&toolbar=1&zoom=100`}
                    frameBorder="0"
                    height="700px"
                    type="application/pdf"
                    width="100%"
                  >
                    <embed
                      height="700px"
                      src={`${termsOfService}#navpanes=1&scrollbar=1&toolbar=1&zoom=100`}
                      type="application/pdf"
                      width="100%"
                    />
                  </object>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TermsAndConditions;
