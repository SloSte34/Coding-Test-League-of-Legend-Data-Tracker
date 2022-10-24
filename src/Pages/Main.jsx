import React, { useEffect, useState } from 'react';
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
      />
    </>
  );
};

export default Main;
