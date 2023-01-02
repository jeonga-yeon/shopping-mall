function getProducts(query, setLoading) {
  return async (dispatch, getState) => {
    try {
      const searchQuery = query.get("q") || "";
      const url = `https://my-json-server.typicode.com/joyfuldev/shopping-mall/products?q=${searchQuery}`;
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "GET_PRODUCTS", payload: { data } });
      setLoading(false);
    } catch (error) {
      dispatch({ type: "GET_PRODUCTS_ERROR", payload: { error } });
      setLoading(true);
    }
  };
}

function getProductDetail(id, setLoding) {
  return async (dispatch, getState) => {
    try {
      const url = `https://my-json-server.typicode.com/joyfuldev/shopping-mall/products/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "GET_PRODUCT_DETAIL", payload: { data } });
      setLoding(false);
    } catch (error) {
      dispatch({
        type: "GET_PRODUCT_DETAIL_ERROR",
        payload: { error },
      });
      setLoding(true);
    }
  };
}

export const productAction = { getProducts, getProductDetail };
