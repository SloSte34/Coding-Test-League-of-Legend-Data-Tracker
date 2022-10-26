import React from 'react';

const MostInfoItem = ({ name, count, win, role, laning, kda }) => {
  return (
    <>
      <div>이미지</div>
      <div>
        <div>{name}</div>
        <div>{count}</div>
      </div>
      <div>{win}</div>
      <div>{role}</div>
      <div>{laning}</div>
      <div>{kda}</div>
    </>
  );
};

export default MostInfoItem;
