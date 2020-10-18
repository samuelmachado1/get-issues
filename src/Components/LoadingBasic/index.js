import React from 'react';

import { Container, Loader } from './style';

const LoadingBasic = ({status, message = "Carregando"}) => (
  <>
    {status
      ? (
        <Container>
          <Loader />
          {/* <p>{message}</p> */}
        </Container>
      ) : (
        <div />
      )}
  </>
);

export default LoadingBasic;
