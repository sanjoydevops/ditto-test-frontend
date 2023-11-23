import React from 'react';
import { useSelector } from 'react-redux';

import DisputeChart from '../../components/Charts/DisputeChart';
import JoinedUserChart from '../../components/Charts/JoinedUserChart';
import LoggedInUserStatistic from '../../components/Statistics/LoggedInUserStatistic';
import PlacedBetByDateChart from '../../components/Charts/PlacedBetByDateChart';
import PlacedBetByTypeChart from '../../components/Charts/PlacedBetByTypeChart';

const Dashboard = () => {
  const authPermissions = useSelector(state => state.auth.permissions);
  return (
    <div className="row">
      <div className="col">
        <div className="row">
          {authPermissions.includes('statistic.logged-in-user') && (
            <div className="col-lg-6 mb-3">
              <div className="card h-100">
                <div className="card-header">
                  <div className="card-title">
                    Logged In User Statistics
                  </div>
                </div>
                <div className="card-body">
                  <LoggedInUserStatistic />
                </div>
              </div>
            </div>
          )}
          {authPermissions.includes('chart.placed-bet-by-type') && (
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">
                  Placed Bet By Type Chart
                  </div>
                </div>
                <div className="card-body">
                  <PlacedBetByTypeChart />
                </div>
              </div>
            </div>
          )}
          {authPermissions.includes('chart.placed-bet-by-date') && (
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">
                    Placed Bet By Date Chart
                  </div>
                </div>
                <div className="card-body">
                  <PlacedBetByDateChart />
                </div>
              </div>
            </div>
          )}
          {authPermissions.includes('chart.dispute') && (
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">
                    Dispute Chart
                  </div>
                </div>
                <div className="card-body">
                  <DisputeChart />
                </div>
              </div>
            </div>
          )}
          {authPermissions.includes('chart.joined-user') && (
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">
                    Joined User Chart
                  </div>
                </div>
                <div className="card-body">
                  <JoinedUserChart />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
