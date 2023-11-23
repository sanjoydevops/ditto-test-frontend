import React from 'react';
import { Link } from 'react-router-dom';

import nextArrowIcon from '../../assets/img/NextArrowIcon.png';

import ActiveBetCard from '../Cards/ActiveBetCard';
import CompletedBetCard from '../Cards/CompletedBetCard';
import EmptyListCard from '../Cards/EmptyListCard';
import InvitationBetCard from '../Cards/InvitationBetCard';
import JoinedTeamCard from '../Cards/JoinedTeamCard';
import MyTeamCard from '../Cards/MyTeamCard';
import OfferBetCard from '../Cards/OfferBetCard';
import OpenBetCard from '../Cards/OpenBetCard';

const BetOrTeamList = ({ data, more, tab }) => {
  const length = data?.length || 0;
  if (more) {
    data = data?.slice?.(0, 3);
  }
  const message = [
    'open-bets' === tab && 'open bet',
    'active-bets' === tab && 'active bet',
    'completed-bets' === tab && 'completed bet',
    'invited-bets' === tab && 'bet invitation',
    'offer-bets' === tab && 'offer bet',
    'my-teams' === tab && 'team',
    'joined-teams' === tab && 'joined team',
  ].find(i => i);
  const Card = [
    'open-bets' === tab && OpenBetCard,
    'active-bets' === tab && ActiveBetCard,
    'completed-bets' === tab && CompletedBetCard,
    'invited-bets' === tab && InvitationBetCard,
    'offer-bets' === tab && OfferBetCard,
    'my-teams' === tab && MyTeamCard,
    'joined-teams' === tab && JoinedTeamCard,
  ].find(i => i);
  const props = item => [
    'open-bets' === tab && { bet: item },
    'active-bets' === tab && { bet: item },
    'completed-bets' === tab && { bet: item },
    'invited-bets' === tab && { bet: item },
    'offer-bets' === tab && { bet: item },
    'my-teams' === tab && { team: item },
    'joined-teams' === tab && { team: item },
  ].find(i => i);
  const link = [
    'open-bets' === tab && `/bets?tab=${tab}`,
    'active-bets' === tab && `/bets?tab=${tab}`,
    'completed-bets' === tab && `/bets?tab=${tab}`,
    'invited-bets' === tab && `/bets?tab=${tab}`,
    'offer-bets' === tab && `/bets?tab=${tab}`,
    'my-teams' === tab && `/teams?tab=${tab}`,
    'joined-teams' === tab && `/teams?tab=${tab}`,
  ].find(i => i);
  const label = [
    'open-bets' === tab && 'Open Bets',
    'active-bets' === tab && 'Active Bets',
    'completed-bets' === tab && 'Completed Bets',
    'invited-bets' === tab && 'Bet Invitations',
    'offer-bets' === tab && 'Offer Bets',
    'my-teams' === tab && 'My Teams',
    'joined-teams' === tab && 'Joined Teams',
  ].find(i => i);
  return (<>
    {message && Card && (
      <div className="row">
        {length === 0 && (
          <div className="col-md-4 mx-auto">
            <EmptyListCard message={`You don't have any ${message}.`} />
          </div>
        )}
        {data?.map?.((item, i) => (
          <div className={`col-lg-${more ? 4 : 3} col-md-6 mb-2 mb-md-2 mb-lg-2 mb-xl-2 ${more ? '' : 'm-b-4'}`} key={i}>
            <Card {...props(item)} />
          </div>
        ))}
      </div>
    )}
    {link && label && more && length > 3 && (
      <div className="row">
        <div className="col">
          <Link to={link} className="float-right text-green pro-more-button">
            {`See All ${label} `}
            <img alt="see all" src={nextArrowIcon} />
          </Link>
        </div>
      </div>
    )}
  </>);
};

export default BetOrTeamList;
