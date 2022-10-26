import React from 'react';
import TierChart from './TierChart';

const PlayerInfo = ({ name, laning, role, kda, tierHistory }) => {
  let playerRole = String(Math.round(role * 100) / 100);
  let playerKda = String(Math.round(kda * 100) / 100);
  let playerLaning = String(Math.round(laning * 100) / 100);

  return (
    <>
      <TierChart tierHistory={tierHistory} />
      <h1>{name}</h1>
      <div>{playerRole}</div>
      <span>Hi</span>
      <div>{playerLaning}</div>
      <span>Hi</span>
      <div>{playerKda}</div>
      <span>Hi</span>
    </>
  );
};

export default PlayerInfo;
