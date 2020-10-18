import styled from '@react-pdf/styled-components';

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  height: 200px;
  margin: 10px 0 0 0;
`;

export const BrandText = styled.Text`
  padding-top: 10px;
  font-size: 9;
  font-weight: bold;
  color: #4d4d4d;
  /* text-align: center; */
`;
export const FooterTextInfo = styled.Text`
  font-size: 9px;
  color: #4d4d4d;
`;

export const Contact = styled.View`
  justify-content: flex-end;
  padding: 15px;
  max-width: 175px;
`;

export const Body = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 30px;
  margin-right: 30px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Img = styled.Image`
  flex: 1;
`;

export const ItemText = styled.Text`
  margin-top: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #000;
  text-transform: uppercase;
`;

export const DetailText = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  color: #000;
`;

export const Page = styled.Page`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Logo = styled.Image`
    max-width: 150px;
    margin: 20px;
`;

export const Section = styled.View`
  margin: 30px;
  padding: 10px;
  flex-grow: 1,
`;
