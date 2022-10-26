import React from 'react';
import styled from 'styled-components';
import Bot from '../assets/images/bot.svg';
import Jug from '../assets/images/jug.svg';
import Mid from '../assets/images/mid.svg';
import Sup from '../assets/images/sup.svg';
import Top from '../assets/images/top.svg';

const MostInfoItem = ({ img, name, count, win, role, laning, kda }) => {
  let playerRole = String(Math.round(role * 100) / 100);
  let playerKda = String(Math.round(kda * 100) / 100);
  let playerLaning = String(Math.round(laning * 100) / 100);
  let playerWin = String(Math.round(win * 100) / 100);

  let image;
  if (name === 'Mid') {
    image = Mid;
  } else if (name === 'Adc') {
    image = Bot;
  } else if (name === 'Sup') {
    image = Sup;
  } else if (name === 'Top') {
    image = Top;
  } else if (name === 'Jug') {
    image = Jug;
  } else {
    image = img;
  }

  return (
    <>
      <Wrapper>
        <ImgName>
          <Image>
            <img src={image} alt='info' />
          </Image>
          <Name>
            <div>{name}</div>
            <div>{count}판</div>
          </Name>
        </ImgName>
        <Data>
          <Win>
            <div>{playerWin}%</div>
          </Win>
          <Role>
            <div>{playerRole}</div>
          </Role>
          <Lane>
            <div>{playerLaning}</div>
          </Lane>
          <KDA>
            <div>{playerKda}</div>
          </KDA>
        </Data>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 7px;
`;

const ImgName = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Data = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Image = styled.div`
  img {
    width: 2.8rem;
    height: 2.8rem;
  }
`;
const Name = styled.div``;
const Win = styled.div``;
const Role = styled.div``;
const Lane = styled.div``;
const KDA = styled.div``;

export default MostInfoItem;
