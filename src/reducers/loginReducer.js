const INITIAL_STATE = {
  isLogged: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'login_request':
      return {
        ...state,
        isLogged: action.payload
      };
    default:
      return state;
  }
};
