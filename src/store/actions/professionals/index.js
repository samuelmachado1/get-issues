import actionsTypes from '../../actionsTypes/professionals';

export function handleProfessionals(professionals = []) {
  return {
    type: actionsTypes.HANDLEPROFESSIONALS,
    professionals,
  };
}

export function handleFilters(filters = {}) {
  return {
    type: actionsTypes.HANDLEFILTERS,
    filters,
  };
}

export function handleLoading(status) {
  return {
    type: actionsTypes.HANDLELOADINGPROFESSIONALS,
    status,
  };
}

export function handleModal(status = false, message = '', title = '') {
  return {
    type: actionsTypes.HANDLEMODALPROFESSIONALS,
    status,
    message,
    title,
  };
}
