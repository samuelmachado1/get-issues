import styled from 'styled-components';

export const Container = styled.div`
  color: #222;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  flex-grow: 1;

  div {
    margin: 0 25px;
    width: 180px;
    height: 100px;

    p {
      font-size: 18px;
      font-weight: 550;
      margin-bottom: 5px;
    }
  }
`;
