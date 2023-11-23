import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import { ChartAction } from '../../../store/actions';

const DisputePieChart = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.list.chart?.dispute || []);
  useEffect(() => dispatch(ChartAction.fetchDisputeChartData()), [dispatch]);
  return (
    <ResponsiveContainer width="100%" aspect={1.5}>
      <PieChart width={400} height={400}>
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          dataKey="value"
          fill="#8884d8"
          isAnimationActive={false}
          label
          nameKey="label"
          outerRadius={150}
        >
          {data.map((d, i) => (
            <Cell key={`cell-${i}`} fill={d.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DisputePieChart;
