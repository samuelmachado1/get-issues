import React from 'react';

import {
  Container,
  Dialog,
  DialogBody,
  Background,
  Title,
  Message,
} from './style';

const Modal = ({
  isOpen,
  handleModal,
  title = '',
  button = false,
  message = '',
}) => (
  <Container status={isOpen}>
    <Background onClick={handleModal} />
    <Dialog>
      <DialogBody>
        <Title>
          {title}
        </Title>
        <Message>
          {message}
        </Message>
        {
          button
        }
      </DialogBody>
    </Dialog>
  </Container>
);

export default Modal;
