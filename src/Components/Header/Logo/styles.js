import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Line = styled.div`
  width: 45px;
  height: 0px;

  border: 1px solid #FFFFFF;
  transform: rotate(90deg);
`;

export const LogoName = styled.span`
  font-family: 'OpenSans' !important;
  font-size: 30px;
  line-height: 30px;
  letter-spacing: 0em;
  text-transform: uppercase;

  color: #FFFFFF;

  /* opacity: 0.9; */
`;
