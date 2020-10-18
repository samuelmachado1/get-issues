import actionsTypes from '../../actionsTypes/requests';

export const setRequests = (requests) => (
  {
    type: actionsTypes.SETREQUESTS,
    requests,
  }
);

export const setSelectedRequest = (request) => (
  {
    type: actionsTypes.SETSELECTEDREQUEST,
    request,
  }
);

export const setInterviewDate = (date) => (
  {
    type: actionsTypes.SETINTERVIEWDATE,
    date,
  }
);

export function handleLoading(status, loadingType = 'table') {
  return {
    type: actionsTypes.HANDLELOADINGREQUESTS,
    status,
    loadingType,
  };
}

export function handleModal(status = false, message = '', title = '') {
  return {
    type: actionsTypes.HANDLEMODALREQUESTS,
    status,
    message,
    title,
  };
}
