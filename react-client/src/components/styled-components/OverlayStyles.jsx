import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  display: ${props => (props.overlay ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
`;
const CenterImage = styled.img`
  max-width: 80%;
  max-height: 350px;
  position: relative;
  display: block;
  margin: auto;
`;
const BannerSpacer = styled.div`
  margin-top: 10px;
`;
const BannerContainer = styled.div`
  position: relative;
  max-height: 20%;
  justify-content: center;
  max-height: 65vh;
`;
const CenterImageWrapper = styled.span`
  width: 100%;
  position: relative;
  display: inline-block;
  box-sizing: inherit;
`;
const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  box-sizing: inherit;
`;
const CarouselSection = styled.section`
  padding-left: 24px;
  padding-right: 24px;
`;
const CarouselWrapper = styled.div`
  display: block;
  box-sizing: inherit;
`;
const CarouselImage = styled.img`
  display: inline-block
  position: relative;
  margin: auto;
  width: 120px;
  float: left;
  padding: 5px;
`;
const CarouselImageWrapper = styled.div`
  overflow-x: scroll;
  -webkit-flex: 1;
  position: fixed;
  bottom: 3%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  clear: both;
`;
const CarouselContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1300px;
`;
const CarouselHeader = styled.div`
  padding-top: 10px;
  height: 40px;
  margin: 0 10px 10px;
`;
const Button = styled.input`
input:focus{
  outline: none;
}
z-index: 3;
height: 10%
position: fixed;
display: block;
top: 40%;
opacity: 0.1;
`;

const ButtonLeft = styled(Button)`
  :hover {
    opacity: 1;
  }
  left: 3%;
  float: left;
`;

const ButtonRight = styled(Button)`
  float: right;
  left: 92%
  transform: rotate(180deg);
  :hover {
    opacity: 1;
  }
`;

const ButtonExit = styled.input`
  z-index: 3;
  height: 10%;
  float: right;
  position: fixed;
  top: 5%
  left:90%
  opacity:.5
  :hover {
    opacity: 1;
  }
`;

export {
  Overlay,
  CenterImage,
  BannerSpacer,
  BannerContainer,
  CenterImageWrapper,
  ContentContainer,
  CarouselSection,
  CarouselWrapper,
  CarouselImage,
  CarouselImageWrapper,
  CarouselContainer,
  CarouselHeader,
  ButtonLeft,
  ButtonRight,
  ButtonExit,
};
