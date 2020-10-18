import actionsTypes from '../../actionsTypes/requests';

const INITIAL_STATE = {
  requests: [],
  selectedRequest: {},
  isLoading: {
    table: false,
    full: false,
  },
  modal: {
    isOpen: false,
    message: '',
    title: '',
  },
};

const requests = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.SETREQUESTS:
      return {
        ...state,
        requests: action.requests,
      };
    case actionsTypes.SETSELECTEDREQUEST:
      return {
        ...state,
        selectedRequest: action.request,
      };
    case actionsTypes.HANDLELOADINGREQUESTS:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          [action.loadingType]: action.status,
        },
      };
    case actionsTypes.HANDLEMODALREQUESTS:
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpen: action.status,
          message: action.message,
          title: action.title,
        },
      };
    case actionsTypes.SETINTERVIEWDATE:
      return {
        ...state,
        selectedRequest: {
          ...state.selectedRequest,
          interviewDateCalendar: action.date,
        },
      };
    default:
      return state;
  }
};

export default requests;
