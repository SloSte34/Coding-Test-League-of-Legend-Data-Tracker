import React, { useEffect, useState } from 'react';
import MostInfoList from '../components/MostInfoList';
import PlayerInfo from '../components/PlayeInfo';

const Main = () => {
  const [playerData, setPlayerData] = useState([]);

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
      <PlayerInfo
        name={playerData.name}
        role={playerData.role}
        laning={playerData.laning}
        kda={playerData.kda}
        tierHistory={playerData.tierHistory}
      />
      <MostInfoList
        mostChamp={playerData.mostChampions}
        mostLane={playerData.mostLanes}
      />
    </>
  );
};

export default Main;
