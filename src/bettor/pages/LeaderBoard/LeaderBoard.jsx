import classNames from 'classnames';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './LeaderBoard.module.scss';
import defaultProfilePhoto from '../../assets/img/default-profile-photo.png';

import { UserAction } from '../../store/actions';

const LeaderBoard = () => {
  const dispatch = useDispatch();
  const leaderBoardUsers = useSelector(state => state.list.user?.leaderBoard || []);
  useEffect(() => dispatch(UserAction.listLeaderBoardUsers()), [dispatch]);
  return (
    <div className={styles.Leader__Board}>
      <div className="col-md-12">
        <div className={styles.Leader__Board__Card__Bg}>
          <div className={classNames('mt-2', styles.Leader__Board__Result__Card)}>
            <div className={styles.Leader__Board__Result__Header}>
              <h3>Leader Board</h3>
            </div>
            <div className={styles.Leader__Board__Result__Body}>
              <div className={styles.Leader__Board__Single__User__Field}>
                <div className={styles.Leader__Board__Single__User__Content}>
                  <div className={styles.Leader__Board__Single__User__Image}>
                    <p className={styles.Leader__Board__Image}>Image</p>
                  </div>
                  <div className={styles.Leader__Board__Single__User__Name}>
                    <p>Name</p>
                  </div>
                  <div className={styles.Leader__Board__Single__User__Rate}>
                    <p>Balance</p>
                  </div>
                  <div className={styles.Leader__Board__Single__User__Up}>
                    <p className={styles.Leader__Board__Updown__Head}>Up and Down</p>
                  </div>
                </div>
                <hr className={styles.Leader__Board__Header__Border} />
                {leaderBoardUsers.map((user, i) => (
                  <Fragment key={i}>
                    <div className={styles.Leader__Board__Single__User__Content}>
                      <div className={styles.Leader__Board__Single__User__Image}>
                        <Link to={`/view-profile/${user?.id}`}>
                          <img alt="leader-board" src={user?.profile?.photo || defaultProfilePhoto} /> 
                        </Link>
                      </div>
                      <div className={styles.Leader__Board__Single__User__Name}>
                        <p>{user?.username}</p>
                      </div>
                      <div className={styles.Leader__Board__Single__User__Rate}>
                        <p>{user?.profile?.red_coin_balance}</p>
                      </div>
                      <div className={styles.Leader__Board__Single__User__Up}>
                        {user?.profile?.red_coin_fluctuant > 0 && (<>
                          <i className={classNames('fas fa-arrow-up', styles.Leader__Board__Color__Green)}></i>
                          <p>
                            <span className={styles.Leader__Board__Color__Green}>{user?.profile?.red_coin_fluctuant}</span>
                            <span className={styles.Leader__Board__Color__Golden}> UP</span>
                          </p>
                        </>)}
                        {user?.profile?.red_coin_fluctuant < 0 && (<>
                          <i className={classNames('fas fa-arrow-down', styles.Leader__Board__Color__Red)}></i>
                          <p>
                            <span className={styles.Leader__Board__Color__Red}>{Math.abs(user?.profile?.red_coin_fluctuant)}</span>
                            <span className={styles.Leader__Board__Color__Golden}> DOWN</span>
                          </p>
                        </>)}
                      </div>
                    </div>
                    <hr />
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
