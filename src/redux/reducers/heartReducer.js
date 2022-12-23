let initialState = {
  idList: [],
  heartData: [],
};

function heartReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "HEART":
      return { ...state, idList: [...state.idList, payload.id] };
    case "DELETE_HEART":
      return {
        ...state,
        idList: [...state.idList.filter((id) => id !== payload.id)],
      };
    case "HEART_SUCCESS":
      return { ...state, heartData: payload.heartData };
    default:
      return { ...state };
  }
}

export default heartReducer;
