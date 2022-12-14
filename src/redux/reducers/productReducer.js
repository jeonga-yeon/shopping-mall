let initialState = {
  productList: [],
};

function productReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_PRODUCTS":
      return { ...state, productList: payload.data };
    default:
      return { ...state };
  }
}

export default productReducer;
