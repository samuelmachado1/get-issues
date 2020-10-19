import React from 'react';

// import logo from '../../../assets/images/stefanini-white.png';
import {
  Container,
  LogoName,
  Line,
} from './styles';

import logo from '../../../assets/img/gitHub.svg'


function Logo() {
  return (
    <Container>
      <Line />
      <LogoName>
        Get issues - repository React
      </LogoName>
        <img 
          src={logo}
          style={{ height: 53, width: 53, margin: 25, }}
          alt="gitHub" 
          />
      
    </Container>
  );
}

export default Logo;
