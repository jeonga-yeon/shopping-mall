let initialState = {
  userList: [],
};

function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "JOIN_SUCCESS":
      return {
        ...state,
        userList: [...state.userList, payload.user],
      };
    default:
      return { ...state };
  }
}

export default userReducer;
