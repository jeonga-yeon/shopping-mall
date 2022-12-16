function login(id, password) {
  return async (dispatch, getState) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
  };
}

export const authenticateAction = { login };
