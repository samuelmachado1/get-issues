import actionsTypes from '../../actionsTypes/professional';

const INITIAL_STATE = {
  isLoading: false,
  professional: {
    id: 0,
  },
  modal: {
    isOpen: false,
    message: '',
    title: '',
    button: false,
  },
  professionalInterview: {
    salary: '',
    client: '',
    benefits: '',
    benefitsComplementary: '',
    kind: '',
  },
  languages: [],
  branchs: [],
  cells: [],
  realocationReasons: [],
  managers: [],
  roles: [],
  coins: [],
  states: [],
  formData: {
    name: '',
    email: '',
    dt_valid: null,
    salary: '',
    hourly_salary: '',
    cpf: '',
    registration: '',
    client: '',
    workplace: '',
    qtd_warning: undefined,
    qtd_suspension: undefined,
    suspension_warning_reason: '',
    absenteeism: undefined,
    benefits: '',
    skills: '',
    mounths: '',
    role: '',
    cell: '',
    coin: '',
    manager: '',
    realocation_reason: '',
    branch: '',
    area_code: 55,
    ddd: '',
    phone: '',
    bank_of_hours: undefined,
    coins_id: 1,
    scheduled_vacations: false,
    have_concent: false,
    public_cv: false,
    managers_id: 1,
    branchs_id: 1,
    cells_id: 2,
    states: [],
    languages: [],
    file: {},
    available_at: null,
    formation_id: '',
    hourly_cost: '',
    
  },
};

function professional(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionsTypes.HANDLEPROFESSIONAL:
      return {
        ...state,
        professional: action.professional,
      };
    case actionsTypes.HANDLELOADINGPROFESSIONAL:
      return {
        ...state,
        isLoading: action.status,
      };
    case actionsTypes.HANDLEMODALPROFESSIONAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpen: action.status,
          message: action.message,
          title: action.title,
          button: action.button,
        },
      };
    case actionsTypes.HANDLECHANGEPROFESSIONALINTERVIEW:
      return {
        ...state,
        professionalInterview: {
          ...state.professionalInterview,
          [action.name]: action.value,
        },
      };
    case actionsTypes.HANDLEVALUEPROFESSIONAL:
      return {
        ...state,
        value: action.value,
      };
    case actionsTypes.HANDLECLIENTEPROFESSIONAL:
      return {
        ...state,
        cliente: action.cliente,
      };
    case actionsTypes.HANDLEBENEFITSBALUEPROFESSIONAL:
      return {
        ...state,
        benefits: action.value,
      };
    case actionsTypes.SETLANGUAGESPROFESSIONAL:
      return {
        ...state,
        languages: action.languages,
      };
    case actionsTypes.SETROLESPROFESSIONAL:
      return {
        ...state,
        roles: action.roles,
      };
    case actionsTypes.SETMANAGERSPROFESSIONAL:
      return {
        ...state,
        managers: action.managers,
      };
    case actionsTypes.SETSTATESPROFESSIONAL:
      return {
        ...state,
        states: action.states,
      };
    case actionsTypes.SETREALOCATIONREASONSPROFESSIONAL:
      return {
        ...state,
        realocationReasons: action.realocationReasons,
      };
    case actionsTypes.SETCELLSPROFESSIONAL:
      return {
        ...state,
        cells: action.cells,
      };
    case actionsTypes.SETBRANCHSPROFESSIONAL:
      return {
        ...state,
        branchs: action.branchs,
      };
    case actionsTypes.SETINFOSPROFESSIONAL:
      return {
        ...state,
        languages: action.infos.languages,
        branchs: action.infos.branchs,
        cells: action.infos.cells,
        realocationReasons: action.infos.realocationReasons,
        managers: action.infos.manager,
        roles: action.infos.roles,
        states: action.infos.states,
        coins: action.infos.coins,
      };
    case actionsTypes.SETFORMDATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.formData,
        },
      };
    case actionsTypes.CLEARPROFESSIONAL:
      return {
        ...state,
        professional: {
          id: 0,
        }
      }
    default:
      return state;
  }
}

export default professional;
