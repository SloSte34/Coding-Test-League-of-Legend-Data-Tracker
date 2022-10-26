import React from 'react';
import MostInfoItem from './MostInfoItem';

const MostInfoList = ({ mostChamp, mostLane }) => {
  let mostLaneData = mostLane;
  let mostChampData = mostChamp;
  console.log(mostLaneData);

  return (
    <>
      {mostLaneData &&
        mostLaneData.map((data) => (
          <MostInfoItem
            key={data.kda}
            name={data.lane}
            count={data.matchCount}
            win={data.winRate}
            role={data.role}
            laning={data.laning}
            kda={data.kda}
          />
        ))}
      {mostChampData &&
        mostChampData.map((champData) => (
          <MostInfoItem
            key={champData.kda}
            name={champData.lane}
            count={champData.matchCount}
            win={champData.winRate}
            role={champData.role}
            laning={champData.laning}
            kda={champData.kda}
          />
        ))}
      {!mostLaneData && <div>Loading...</div>}
    </>
  );
};

export default MostInfoList;
