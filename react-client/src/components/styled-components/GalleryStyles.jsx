import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  max-height: 60%;
  display: block;
`;
const MagnifyingGlass = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  height: 15%;
  width: 15%;
  opacity: 0;
  ${Container}:hover & {
    opacity: 1;
  }
`;

export { Container, Image, MagnifyingGlass };
