function join(name, id, password) {
  return async (dispatch, getState) => {
    const user = { name, id, password };
    dispatch({ type: "JOIN_SUCCESS", payload: { user } });
  };
}

export const userAction = { join };
