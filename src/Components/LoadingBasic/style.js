import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  z-index: 2;
  padding: 25px 0;
`;

export const Loader = styled.div`
  border: 4px solid transparent;
  border-top: 4px solid #0b1641;
  border-right: 4px solid #0b1641;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
