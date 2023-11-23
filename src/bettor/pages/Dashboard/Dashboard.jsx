import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import dashboardIcon from '../../assets/img/DashboardIcon.png';
import dittoMarcNewCoinFinal from '../../assets/img/DittoMarc-new-coin-final.png';

import { AppAction } from '../../store/actions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const authUserProfile = useSelector(state => ({ ...state.auth.user.profile }));
  const onPlaceBetModalOpen = () => dispatch(AppAction.toggle({
    key: 'placeBetModal',
    value: { type: 3 },
  }));
  return (
    <div className="container w-1734 opens-my">
      <div className="dash-content">
        <div className="row">
          <div className="col">
            <div className="dash1-content-head">
              <h5>
                <img alt="Dashboard" src={dashboardIcon} />
                Dashboard
              </h5>
            </div>
            <div className="dash1-content">
              <div className="row">
                <div className="col">
                  <div className="dash1-content-title text-center">
                    <span>Fun: {authUserProfile.red_coin_balance}</span>
                    <span>Bet Placed: {authUserProfile.total_bets}</span>
                    <span>Profit: {authUserProfile.green_coin_balance}</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="desh1-cont-inner desh1-c-red">
                    <div className="image">
                      <img alt="Fun Coin" src={dittoMarcNewCoinFinal} />
                    </div>
                    <div className="balance">
                      <h6 className="title text-red">Fun DittoMarcs</h6>
                      <span>Balance &nbsp;&nbsp; {authUserProfile.red_coin_balance}</span>
                    </div>
                    <Link
                      className="btn btn-block bg-red text-white desh1-con-btn"
                      to="/payment"
                    >
                      +Add DittoMarcs
                    </Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="desh1-cont-inner desh1-c-yellow">
                    <div className="image">
                      <img alt="Total Bet" src={dittoMarcNewCoinFinal} />
                    </div>
                    <div className="balance">
                      <h6 className="title text-yellow">Place A Bet</h6>
                      <span>Total Bet &nbsp;&nbsp; {authUserProfile.total_bets}</span>
                    </div>
                    <button
                      className="btn btn-block bg-yellow desh1-con-btn"
                      onClick={onPlaceBetModalOpen}
                    >
                      Place a Bet
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="desh1-cont-inner desh1-c-green">
                    <div className="image">
                      <img alt="Profit Coin" src={dittoMarcNewCoinFinal} />
                    </div>
                    <div className="balance">
                      <h6 className="title text-green">Profit DittoMarcs</h6>
                      <span>Balance &nbsp;&nbsp; {authUserProfile.green_coin_balance}</span>
                    </div>
                    <Link
                      className="btn btn-block bg-green text-white desh1-con-btn"
                      to="/payment"
                    >
                      +Add DittoMarcs
                    </Link>
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

export default Dashboard;
