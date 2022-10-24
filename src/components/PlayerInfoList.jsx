import React from 'react';
import PlayerRecentGameItem from './PlayerListItemRecent';

const PlayerInfoList = (props) => {
  <ul>
    {props.data.map(() => (
      <PlayerRecentGameItem recent role laning winRate kda />
    ))}
  </ul>;
};

export default PlayerInfoList;
