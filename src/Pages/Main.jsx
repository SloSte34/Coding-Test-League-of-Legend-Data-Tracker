import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MostInfoList from '../components/MostInfoList';
import PlayerInfo from '../components/PlayeInfo';

const Main = () => {
  const [playerData, setPlayerData] = useState([]);
  // const [gameSort, setGameSort] = useState();

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://api.your.gg/kr/api/summoners/hide on bush?matchCategory=SoloRank',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setPlayerData(result))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <Wrapper>
        <MainPage>
          <PlayerInfo
            name={playerData.name}
            role={playerData.role}
            laning={playerData.laning}
            kda={playerData.kda}
            tierHistory={playerData.tierHistory}
          />
          <List>
            <Title>
              <div>
                <span>최근 30 경기</span>
              </div>
              <div>
                <span>승률</span>
                <span>인분</span>
                <span>라인전</span>
                <span>KDA</span>
              </div>
            </Title>
            <MostInfoList
              mostChamp={playerData.mostChampions}
              mostLane={playerData.mostLanes}
            />
          </List>
        </MainPage>
        <span>cocacolazero024@gmail.com</span>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;
  span {
    font-size: 5px;
    color: gray;
  }
`;

const MainPage = styled.div`
  width: 520px;
  height: 822px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.ol`
  width: 80%;
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  div:first-child {
    width: 30%;
  }
  div:last-child {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }
  margin-bottom: 20px;
`;

export default Main;
