import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { ChartAction } from '../../../store/actions';

const PlacedBetByTypeChart = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.list.chart?.placedBetByType || []);
  useEffect(() => dispatch(ChartAction.fetchPlacedBetByTypeChartData()), [dispatch]);
  return (
    <ResponsiveContainer width="100%" aspect={1.5}>
      <BarChart data={data} height={400} width={400}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis dataKey="value" />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" name="Placed Bets">
          {data.map((d, i) => (
            <Cell key={`cell-${i}`} fill={d.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PlacedBetByTypeChart;
