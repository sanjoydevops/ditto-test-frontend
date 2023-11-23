import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ContactUsAction } from '../../store/actions';

const ContactUsDetail = () => {
  const dispatch = useDispatch();
  const { contactUsId } = useParams();
  const  contactUs = useSelector(state => state.detail.contactUs);
  useEffect(() => {
    dispatch(ContactUsAction.viewContactUs(contactUsId));
  }, [dispatch, contactUsId]);
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              Contact Us Detail
            </h3>
          </div>
          <div className="card-body">
            <dl className="mb-0">
              {/* <dt>ID</dt>
              <dd>{contactUs?.id}</dd> */}
              <dt>Name</dt>
              <dd>{contactUs?.name}</dd>
              <dt>Email</dt>
              <dd>{contactUs?.email}</dd>
              <dt>Reason</dt>
              <dd>{contactUs?.reason}</dd>
              <dt>Message</dt>
              <dd>{contactUs?.message}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsDetail;
