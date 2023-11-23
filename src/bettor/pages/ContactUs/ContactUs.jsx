import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { AppAction } from '../../store/actions';

const ContactUs = () => {
  const dispatch = useDispatch();
  const { errors, formKey, message: formMessage } = useSelector(state => state.form.contactUs || {});
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [reason, setReason] = useState('');
  const onClear = () => {
    setEmail('');
    setMessage('');
    setName('');
    setReason('');
  };
  const onSubmit = event => {
    event.preventDefault();
    dispatch(AppAction.contactUs({
      email,
      message,
      name,
      reason,
    }));
  };
  useEffect(() => {
    if (errors === null) {
      onClear();
      dispatch(AppAction.toggle({
        key: 'alertModal',
        value: { formKey, message: formMessage },
      }));
    }
  }, [dispatch, errors, formKey, formMessage]);
  return (
    <div className="container w-1295 opens-my">
      <div className="dash-content">
        <div className="row">
          <div className="col">
            <div className="dash-content-head">
              <h5> Contact Us</h5>
            </div>
            <div className="dash-content-form">
              <div className="row">
                <div className="col">
                  <div className="dash-content-inner">
                    <form className="custom-form" onSubmit={onSubmit}>
                      <div className="form-row row">
                        <div className="form-group col-md">
                          <input
                            className={classNames('form-control', {
                              'is-invalid': errors?.name?.length,
                            })}
                            name="name"
                            onChange={event => setName(event.target.value)}
                            placeholder="Full Name *"
                            type="text"
                            value={name}
                          />
                          <div className="invalid-feedback">
                            {errors?.name?.join(' ')}
                          </div>
                        </div>
                        <div className="form-group col-md">
                          <input
                            className={classNames('form-control', {
                              'is-invalid': errors?.email?.length,
                            })}
                            name="email"
                            onChange={event => setEmail(event.target.value)}
                            placeholder="Email Address *"
                            type="email"
                            value={email}
                          />
                          <div className="invalid-feedback">
                            {errors?.email?.join(' ')}
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <select
                          className={classNames('form-control', {
                            'is-invalid': errors?.reason?.length,
                          })}
                          name="reason"
                          onChange={event => setReason(event.target.value)}
                          value={reason}
                        >
                          <option>Contacting For</option>
                          <option>General Inquery</option>
                          <option>Feedback/Suggestions</option>
                          <option>Bet Dispute</option>
                        </select>
                        <div className="invalid-feedback">
                          {errors?.reason?.join(' ')}
                        </div>
                      </div>
                      <div className="form-group">
                        <textarea
                          className={classNames('form-control', {
                            'is-invalid': errors?.message?.length,
                          })}
                          name="message"
                          onChange={event => setMessage(event.target.value)}
                          placeholder="Message"
                          rows="3"
                          value={message}
                        />
                        <div className="invalid-feedback">
                          {errors?.message?.join(' ')}
                        </div>
                      </div>
                      <div className="float-right profile-button">
                        <button type="button" className="btn btn-cancel" onClick={onClear}>Clear</button>
                        <button type="submit" className="btn bg-green sent-m-button">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
