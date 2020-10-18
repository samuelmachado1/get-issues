import actionsTypes from '../../actionsTypes/auth';

export function changeAuthMessage(message = '') {
  return {
    type: actionsTypes.CHANGEAUTHMESSAGE,
    message,
  };

}

export function handleModalLogin(status = false, message = '', title = '', button = false) {
  
  return {
    type: actionsTypes.MULTIPLELOGIN,
    status,
    message,
    title,
    button,
  };
}
