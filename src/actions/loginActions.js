export const loginRequest = () => dispatch => {
  dispatch({
    type: 'login_request',
    payload: true
  });
};
