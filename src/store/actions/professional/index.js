import actionsTypes from '../../actionsTypes/professional';

export function handleProfessional(professional = []) {
  return {
    type: actionsTypes.HANDLEPROFESSIONAL,
    professional,
  };
}

export function handleLoading(status) {
  return {
    type: actionsTypes.HANDLELOADINGPROFESSIONAL,
    status,
  };
}

export function handleModal(status = false, message = '', title = '', button = false) {
  return {
    type: actionsTypes.HANDLEMODALPROFESSIONAL,
    status,
    message,
    title,
    button,
  };
}

export function handleChangeProfessionalInterview(name, value) {
  return {
    type: actionsTypes.HANDLECHANGEPROFESSIONALINTERVIEW,
    name,
    value,
  };
}

export function setLanguages(languages = []) {
  return {
    type: actionsTypes.SETLANGUAGESPROFESSIONAL,
    languages,
  };
}

export function setRoles(roles = []) {
  return {
    type: actionsTypes.SETROLESPROFESSIONAL,
    roles,
  };
}

export function setManagers(managers = []) {
  return {
    type: actionsTypes.SETMANAGERSPROFESSIONAL,
    managers,
  };
}

export function setStates(states = []) {
  return {
    type: actionsTypes.SETSTATESPROFESSIONAL,
    states,
  };
}

export function setRealocationReasons(realocationReasons = []) {
  return {
    type: actionsTypes.SETREALOCATIONREASONSPROFESSIONAL,
    realocationReasons,
  };
}

export function setCells(cells = []) {
  return {
    type: actionsTypes.SETCELLSPROFESSIONAL,
    cells,
  };
}

export function setBranchs(branch = []) {
  return {
    type: actionsTypes.SETBRANCHSPROFESSIONAL,
    branch,
  };
}

export function setInfos(infos = {}) {
  return {
    type: actionsTypes.SETINFOSPROFESSIONAL,
    infos,
  };
}

export function setFormData(formData = {}) {
  return {
    type: actionsTypes.SETFORMDATA,
    formData,
  };
}

export function clearProfessional() {
  return {
    type: actionsTypes.CLEARPROFESSIONAL,
  };
}


