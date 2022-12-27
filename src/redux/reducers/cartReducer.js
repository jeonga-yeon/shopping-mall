let initialState = {
  cartInfoList: [],
  cartData: [],
};

function cartReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "CART":
      return {
        ...state,
        cartInfoList: [
          ...state.cartInfoList,
          {
            id: payload.id,
            quantity: payload.quantity,
            size: payload.size,
            price: payload.price,
          },
        ],
      };
    case "DELETE_CART":
      return {
        ...state,
        cartInfoList: [
          ...state.cartInfoList.filter((item) => item.id !== payload.id),
        ],
        cartData: [...state.cartData.filter((item) => item.id !== payload.id)],
      };
    case "DELETE_CART_ALL":
      return {
        ...state,
        cartInfoList: [],
        cartData: [],
      };
    case "CART_SUCCESS":
      return { ...state, cartData: payload.cartData };
    default:
      return { ...state };
  }
}

export default cartReducer;
