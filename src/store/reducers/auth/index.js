import actionsTypes from '../../actionsTypes/auth';

const INITIAL_STATE = {
  message: '',
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.CHANGEAUTHMESSAGE:
      return {
        ...state,
        message: action.message,
      };
    
    case actionsTypes.MULTIPLELOGIN:
      return {
        
      } 
    default:
      return state;
  }
};



export default auth;
