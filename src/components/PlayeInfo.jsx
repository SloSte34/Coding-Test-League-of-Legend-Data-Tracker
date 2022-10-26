import React from 'react';
import TierChart from './TierChart';
import styled from 'styled-components';

const PlayerInfo = ({ name, laning, role, kda, tierHistory }) => {
  let playerRole = String(Math.round(role * 100) / 100);
  let playerKda = String(Math.round(kda * 100) / 100);
  let playerLaning = String(Math.round(laning * 100) / 100);

  return (
    <>
      <Wrapper>
        <PlayerName>{name}</PlayerName>
        <PlayerInfoBox>
          <InfoBox>
            <Role>
              <span>{playerRole}</span>
              <span>인분</span>
            </Role>
            <Laning>
              <span>{playerLaning}</span>
              <span>라인전</span>
            </Laning>
            <KDA>
              <span>{playerKda}</span>
              <span>KDA</span>
            </KDA>
          </InfoBox>
          <GraphBox>
            <TierChart tierHistory={tierHistory} />
          </GraphBox>
        </PlayerInfoBox>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid black;
  padding-bottom: 30px;
  margin-bottom: 30px;
`;

const PlayerName = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 65px;
`;

const PlayerInfoBox = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
`;
const InfoBox = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
`;

const Role = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  span:first-child {
    font-weight: 900;
    font-size: 20px;
  }
`;

const Laning = styled.div`
  justify-content: space-evenly;
  align-items: center;
  span:first-child {
    font-weight: 900;
    font-size: 20px;
  }
  display: flex;
`;

const KDA = styled.div`
  justify-content: space-evenly;
  align-items: center;
  span:first-child {
    font-weight: 900;
    font-size: 20px;
  }
  display: flex;
`;

const GraphBox = styled.div`
  width: 60%;
`;

export default PlayerInfo;
