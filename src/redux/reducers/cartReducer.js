let initialState = {
  cartInfoList: [],
  error: "",
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
            image: payload.image,
            title: payload.title,
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
      };
    case "DELETE_CART_ALL":
      return {
        ...state,
        cartInfoList: [],
      };
    default:
      return { ...state };
  }
}

export default cartReducer;
