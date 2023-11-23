import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StatisticAction } from '../../../store/actions';

const LoggedInUserStatistic = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.list.statistic?.loggedInUser || []);
  useEffect(() => dispatch(StatisticAction.fetchLoggedInUserStatisticData()), [dispatch]);
  return (
    <div className="info-box">
      {data?.map?.((d, i) => (
        <div className="info-box-content" key={i}>
          <span className="info-box-text">{d.label}</span>
          <span className="info-box-number">{d.value}</span>
        </div>
      ))}
    </div>
  );
};

export default LoggedInUserStatistic;
