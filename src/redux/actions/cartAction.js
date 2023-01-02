function cartList(cartInfoList, setLoading) {
  return async (dispatch, getState) => {
    try {
      const cartIdList = cartInfoList.map((info) => info.id);
      const url = `https://my-json-server.typicode.com/joyfuldev/shopping-mall/products`;
      const response = await fetch(url);
      const data = await response.json();
      const cartData = data.filter((item) => cartIdList.includes(item.id));
      dispatch({ type: "CART_SUCCESS", payload: { cartData } });
      setLoading(false);
    } catch (error) {
      dispatch({ type: "CART_ERROR", payload: { error } });
      setLoading(true);
    }
  };
}

export const cartAction = { cartList };
