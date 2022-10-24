import React from 'react';
import TierChart from './TierChart';

const PlayerInfo = ({ name, laning, role, kda }) => {
  let playerRole = Math.round(role * 100) / 100;
  let playerKda = Math.round(kda * 100) / 100;
  let playerLaning = Math.round(laning * 100) / 100;

  return (
    <>
      <TierChart />
      <h1>{name}</h1>
      <span>{playerRole}</span>
      <span>인분</span>
      <span>{playerLaning}</span>
      <span>라인전</span>
      <span>{playerKda}</span>
      <span>KDA</span>
    </>
  );
};

export default PlayerInfo;
