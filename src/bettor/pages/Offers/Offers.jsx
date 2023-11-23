import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import dittoMarcNewCoinFinal from '../../assets/img/DittoMarc-new-coin-final.png';
// import dittoOffersIcon from '../../assets/img/DittoOffersIcon.png';

import BetList from '../../components/BetOrTeamList';
import { AppAction, BetAction } from '../../store/actions';

const Offers = () => {
  const dispatch = useDispatch();
  const offerBets = useSelector(state => state.list.bet?.offer || []);
  const onPlaceBetModalOpen = () => dispatch(AppAction.toggle({
    key: 'placeBetModal',
    value: { type: 3 },
  }));
  useEffect(() => {
    dispatch(BetAction.listOfferBets());
  }, [dispatch]);
  return (
    <div className="container w-1734 opens-my">
      <div className="row">
        <div className="col">
          <div className="profile-team">
            <div className="profile-team-head">
              {/* <h5><img alt="offers" src={dittoOffersIcon} /> DittoOffers</h5> */}
              <h5> DittoOffers
                <div className="head-right-link float-right">
                  <button className="btn" onClick={onPlaceBetModalOpen}>
                    Post Bet
                    {' '}
                    <img alt="coin" className="img-fluid" src={dittoMarcNewCoinFinal} />
                  </button>
                </div>
              </h5>
            </div>
            <div className="profile-team-tab">
              <div className="tab-content">
                <BetList data={offerBets} tab="offer-bets" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
