import styled from 'styled-components';

const TetrisContainer = styled.div<{ width?: number, height?: number }>`
  // width: ${props => props.width}vw;
  // height: ${props => props.height}vh;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  outline: none;
  
`;

TetrisContainer.defaultProps = {
  width: 90,
  height: 80,
}

export default TetrisContainer;