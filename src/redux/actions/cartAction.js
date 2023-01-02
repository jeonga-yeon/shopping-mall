function cartList(cartInfoList) {
  return async (dispatch, getState) => {
    try {
      const cartIdList = cartInfoList.map((info) => info.id);
      const url = `http://localhost:5000/products`;
      const response = await fetch(url);
      const data = await response.json();
      const cartData = data.filter((item) => cartIdList.includes(item.id));
      dispatch({ type: "CART_SUCCESS", payload: { cartData } });
    } catch (error) {
      dispatch({ type: "CART_ERROR", payload: { error } });
    }
  };
}

export const cartAction = { cartList };
