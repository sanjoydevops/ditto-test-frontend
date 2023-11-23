import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { ChartAction } from '../../../store/actions';

const JoinedUserChart = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.list.chart?.joinedUser || []);
  useEffect(() => dispatch(ChartAction.fetchJoinedUserChartData()), [dispatch]);
  return (
    <ResponsiveContainer width="100%" aspect={1.5}>
      <BarChart data={data} height={400} width={400}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis dataKey="value" />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" name="Joined Users" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default JoinedUserChart;
