import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { UserAction } from '../../store/actions';
import BadgeImage from '../../../shared/components/BadgeImage';
import StarRating from '../../../shared/components/StarRating';

const UserDetail = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const user = useSelector(state => state.detail.user);
  useEffect(() => {
    dispatch(UserAction.viewUser(userId));
  }, [dispatch, userId]);
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              User Detail
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-9">
                <dl className="mb-0">
                  {/* <dt>ID</dt>
                  <dd>{user?.id}</dd> */}
                  <dt>Full Name</dt>
                  <dd>{user?.profile?.full_name}</dd>
                  <dt>Username</dt>
                  <dd>{user?.username}</dd>
                  <dt>Email</dt>
                  <dd>{user?.email}</dd>
                  <dt>Phone</dt>
                  <dd>{user?.phone}</dd>
                  <dt>Secondary Phone</dt>
                  <dd>{user?.profile?.secondary_phone}</dd>
                  <dt>Birth Date</dt>
                  <dd>{user?.profile?.birth_date_text}</dd>
                  <dt>Gender</dt>
                  <dd>{user?.profile?.gender}</dd>
                  <dt>Address 1</dt>
                  <dd>{user?.profile?.address}</dd>
                  <dt>Address 2</dt>
                  <dd>{user?.profile?.address2}</dd>
                  <dt>City</dt>
                  <dd>{user?.profile?.city}</dd>
                  <dt>State</dt>
                  <dd>{user?.profile?.state}</dd>
                  <dt>Zip Code</dt>
                  <dd>{user?.profile?.zip_code}</dd>
                  <dt>Country</dt>
                  <dd>{user?.profile?.country}</dd>
                  <dt>Bet Range</dt>
                  <dd>{user?.profile?.bet_range_text}</dd>
                  <dt>Bet Preferences</dt>
                  <dd>{user?.profile?.bet_preferences_formatted_text}</dd>
                  <dt>Bet Filter</dt>
                  <dd>{user?.profile?.bet_filter}</dd>
                </dl>
              </div>
              <div className="col-md-3">
                <div className="row">
                  <div className="col">
                    <dl className="mb-4">
                      {user?.profile?.rating && (<>
                        <dt>Rating</dt>
                        <dd>
                          <StarRating styleType="1" value={user?.profile?.rating_value} />
                          <span> ({user?.profile?.rating_value})</span>
                        </dd>
                      </>)}
                      {user?.profile?.badge && (<>
                        <dt>Badge</dt>
                        <dd>
                          <BadgeImage color="green" value={user?.profile?.badge_info?.value} />
                          <span> ({user?.profile?.badge_info?.label})</span>
                        </dd>
                      </>)}
                      <dt>Profit Coin</dt>
                      <dd>{user?.profile?.green_coin_balance}</dd>
                      <dt>Fun Coin</dt>
                      <dd>{user?.profile?.red_coin_balance}</dd>
                      <dt>Access</dt>
                      <dd>
                        <span className={classNames({ 'bg-warning': !user?.access })}>
                          {user?.access ? 'Active' : 'Inactive'}
                        </span>
                      </dd>
                    </dl>
                  </div>
                </div>
                {user?.profile?.photo && (
                  <div className="row">
                    <div className="col">
                      <img
                        alt={`user ${user?.id}`}
                        className="img-fluid mb-4"
                        src={user?.profile?.photo}
                      />
                    </div>
                  </div>
                )}
                {user?.profile?.cover && (
                  <div className="row">
                    <div className="col">
                      <img
                        alt={`user ${user?.id}`}
                        className="img-fluid mb-4"
                        src={user?.profile?.cover}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
