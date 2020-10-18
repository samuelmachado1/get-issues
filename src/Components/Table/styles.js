
import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Container = styled.div`
  width: 100%;
  background-color: #f6f6f9;
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  a {
    text-decoration: none;
  }
`;

export const Row = styled.div`
  width: 75%;
  max-width: 1140px;
  padding: 32px 0;

  p {
    margin-top: 0;
    margin-bottom: 40px;
    font-size: 32px;
    font-weight: bold;
    color: #4d4d4d
  }
`;

export const ButtonQuotaStatus = styled.button`
  background-color: #fff;
  border: none;
  padding: 16px;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 0.32px;
  font-weight: 900;
  font-family: 'Lato';
  margin-right: 8px;
  color: ${(props) => (props.active ? '#0b1641' : '#a4a8b2')};
  border-radius: 7px 7px 0 0;
  cursor: pointer;
  box-shadow: ${(props) => (props.active ? '' : 'inset 0px -8px 10px 0px #f6f6f9')};

  &:focus {
    outline: none;
  }
`;

export const ContainerTab = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 18px 0;
  font-family: 'Lato';
  color: #575757;
  border-radius: 0 0 7px 7px;
  box-shadow: 0 3px 20px 0 rgba(93, 100, 115, 0.1);
`;


export const Table = styled.table`
  width: 50%;
  border-collapse: collapse;
  position: relative;
  left: 26vw;
  top: 1vw;

  svg {
    cursor: pointer;
  }

  thead {
    color: #728ecc;
    text-align: center;
    font-size: 16px;
    border: 1px solid;
    tr {
        border: 1px solid;
        th:first-child {
            padding-left: 8px;
        }
      th:last-child {
        padding-right: 8px;
        width: 16px;
      }
    }
  }

  tbody {
    font-size: 14px;


    tr {
      height: 56px;
      
        
      th {
        padding-left: 16px;
        width: 20px;
      }

      td:first-child {
        padding-left: 16px;
        width: 20px;
        
      }

      td:last-child 
      {
        width: 20px;
        padding-right: 16px;
      }
    }

    tr:nth-child(2n) {
      background-color: #f7f7f7;
    }
  }
`;

export const Message = styled.div`
  p {
    font-size: 3px;
    text-align: center;
    margin: 25px 0;
    color: #4d4d4d;
  }
`;

export const ButtonOffer = styled.button`
  background-color: #fff;
  text-transform: uppercase;
  padding: 7px 0;
  font-weight: bold;
  width: 86px;
  color: #0b1641;
  border-radius: 50px;
  border: 2px solid #0b1641;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
