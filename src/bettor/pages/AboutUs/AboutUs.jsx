import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

// import aboutUsWhiteIcon from '../../assets/img/AboutUsWhiteIcon.png';
import image24X100 from '../../assets/img/image2@4x-100.jpg';

import { AppAction } from '../../store/actions';

const AboutUs = () => {
  const dispatch = useDispatch();
  const allAboutUs = useSelector(state => state.list.aboutUs?.all || []);
  useEffect(() => {
    dispatch(AppAction.listAllAboutUs());
  }, [dispatch]);
  return (
    <div className="container w-1295 opens-my">
      <div className="dash-content">
        <div className="row">
          <div className="col">
            <div className="dash-content-head">
              {/* <h5><img src={aboutUsWhiteIcon} alt="" /> About Us</h5> */}
              <h5>About Us</h5>
            </div>
            {allAboutUs.map((aboutUs, i, allAboutUs) => (
              <div key={i}>
                <div className={classNames('about-us-inner', aboutUs.photo_alignment)}>
                  <div className="image">
                    <img alt="about-us" src={aboutUs.photo || image24X100} />
                  </div>
                  <div className="content">
                    <p>
                      <span>{aboutUs.full_name} </span>
                      {aboutUs.description}
                    </p>
                  </div>
                </div>
                {i + 1 === allAboutUs.length ? <></> : <div className="separate-line"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
