import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { AboutUsAction } from '../../store/actions';

const AboutUsDetail = () => {
  const dispatch = useDispatch();
  const { aboutUsId } = useParams();
  const aboutUs = useSelector(state => state.detail.aboutUs);
  useEffect(() => {
    dispatch(AboutUsAction.viewAboutUs(aboutUsId));
  }, [dispatch, aboutUsId]);
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              About Us Detail
            </h3>
          </div>
          <div className="card-body">
            <dl className="mb-0">
              {/* <dt>ID</dt>
              <dd>{aboutUs?.id}</dd> */}
              <dt>Full Name</dt>
              <dd>{aboutUs?.full_name}</dd>
              <dt>Description</dt>
              <dd>{aboutUs?.description}</dd>
              <dt>Photo</dt>
              <dd>{aboutUs?.photo}</dd>
              <dt>Photo Alignment</dt>
              <dd>{aboutUs?.photo_alignment}</dd>
              <dt>Visibility</dt>
              <dd>
                <span className={classNames({ 'bg-warning': !aboutUs?.visibility })}>
                  {aboutUs?.visibility ? 'Shown' : 'Hidden'}
                </span>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDetail;
