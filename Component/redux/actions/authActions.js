export const loginRequest = (username, password) => ({
    type: 'LOGIN_REQUEST',
    payload: { phoneno:username, password },
  });
  
  export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
  });
  
  export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error,
  });
  