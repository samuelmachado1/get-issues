import { EnumType } from 'json-to-graphql-query';



export const interviewStatusEnum = Object.freeze({
  'Entrevista Solicitada': new EnumType("NEW"),
  'Entrevista Marcada': new EnumType("SCHEDULED"),
  'Entrevista Cancelada': new EnumType("CANCELED"),
  'Realoacação Aprovada': new EnumType("ACCEPTED"),
  'Realoacação Rejeitada': new EnumType("REJECTED"),
  'Enviado ao Cliente':new EnumType("SENDED"),
  'Solicitação Cancelada': new EnumType("SEND"),

});

export const interviewStatus = Object.freeze({
  1: 'Entrevista Solicitada',
  2: 'Entrevista Marcada',
  3: 'Entrevista Cancelada',
  4: 'Realoacação Aprovada',
  5: 'Realoacação Rejeitada',
  6: 'Enviado ao Cliente',
  7: 'Solicitação Cancelada',
});

export const interviewStatusMessage = Object.freeze({
  SCHEDULED : 'A entrevista foi marcada com sucesso!',
  'CANCELED': 'A entrevista foi cancelada com sucesso.',
  'ACCEPTED': 'Realocação aprovada com sucesso!',
  'REJECTED': 'Realocação rejeitada com sucesso.',
  'SENDED': 'Status alterado para: Enviado ao Cliente.',
  '7': 'Status alterado para: Solicitação Cancelada.',
});
