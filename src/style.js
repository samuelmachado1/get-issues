import { createGlobalStyle } from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';

import Roboto from './assets/fonts/Roboto.ttf';
import OpenSans from './assets/fonts/OpenSans-Regular.ttf';
import Nexa from './assets/fonts/Nexa-Regular.otf';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "Roboto";
    src: url(${Roboto});
  }

  @font-face {
    font-family: "Nexa";
    src: url(${Nexa});
  }

  @font-face {
    font-family: "Nexa";
    src: url(${Nexa});
  }

  body {
    font-family: 'Roboto';

    &::-webkit-scrollbar {
      width: 7px;
      color: gray;
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: gray;
    }
  }
`;

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#39589D',
      // main: '#39589d',
    },
    secondary: {
      main: '#3BB59F',
      // main: '#b4ef36',
    },
  },
});
