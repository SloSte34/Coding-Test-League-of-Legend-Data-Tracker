import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

const TierChart = ({ tierHistory }) => {
  const tierData = tierHistory && tierHistory.slice(-30);

  return (
    <>
      {tierData && (
        <ResponsiveContainer>
          <LineChart data={tierData}>
            <Tooltip />
            <Line
              type='monotone'
              dataKey='leaguePoint'
              dot={false}
              stroke='#8884d8'
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
      {!tierData && <h1>Loading...</h1>}
    </>
  );
};

export default TierChart;
