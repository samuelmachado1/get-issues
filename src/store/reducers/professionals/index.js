import actionsTypes from '../../actionsTypes/professionals';

const INITIAL_STATE = {
  isLoading: false,
  professionals: [],
  filters: {},
  modal: {
    isOpen: false,
    message: '',
    title: '',
  },
};

function professionals(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionsTypes.HANDLEPROFESSIONALS:
      return {
        ...state,
        professionals: action.professionals,
      };
    case actionsTypes.HANDLEFILTERS:
      return {
        ...state,
        filters: action.filters,
      };
    case actionsTypes.HANDLELOADINGPROFESSIONALS:
      return {
        ...state,
        isLoading: action.status,
      };
    case actionsTypes.HANDLEMODALPROFESSIONALS:
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpen: action.status,
          message: action.message,
          title: action.title,
        },
      };
    default:
      return state;
  }
}

export default professionals;
