import React from 'react';
import MostInfoItem from './MostInfoItem';
import styled from 'styled-components';

const MostInfoList = ({ mostChamp, mostLane }) => {
  let mostLaneData = mostLane;
  let mostChampData = mostChamp && mostChamp.slice(0, 5);
  console.log(mostChampData);

  return (
    <>
      <Wrapper>
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
              key={champData.id}
              img={champData.imageUrl}
              name={champData.name}
              count={champData.matchCount}
              win={champData.winRate}
              role={champData.role}
              laning={champData.laning}
              kda={champData.kda}
            />
          ))}
        {!mostLaneData && <div>Loading...</div>}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

export default MostInfoList;
