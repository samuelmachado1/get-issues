import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 1298;
  right: 0px;
  bottom: 0px;
  top: 0px;
  left: 0px;

  display: flex;
  align-items: center;
  justify-content: center;


  visibility: ${(props) => (props.status ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.status ? '1' : '0')};
  transition: visibility 150ms, opacity 150ms linear;
`;

export const Background = styled.div`
  background-color: rgba(81, 81, 81, 0.4);
  position: fixed;
  right: 0px;
  bottom: 0px;
  top: 0px;
  left: 0px;
  z-index: 1299;
`;

export const Dialog = styled.div`
  background-color: #fff;
  max-width: 350px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 25px;
  padding: 50px;

  max-height: 80%;
  z-index: 1300;
`;

export const DialogBody = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #4d4d4d;
  margin-bottom: 25px;
  text-align: center;
`;

export const Message = styled.div`
  
  font-size: 18px;
  color: #222;
  text-align: center;
`;

export const Button = styled.div`

`;