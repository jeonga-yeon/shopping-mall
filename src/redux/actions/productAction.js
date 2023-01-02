function getProducts(query, setLoading) {
  return async (dispatch, getState) => {
    try {
      const searchQuery = query.get("q") || "";
      const url = `http://localhost:5000/products?q=${searchQuery}`;
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

function getProductDetail(id) {
  return async (dispatch, getState) => {
    try {
      const url = `http://localhost:5000/products/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "GET_PRODUCT_DETAIL", payload: { data } });
    } catch (error) {
      dispatch({
        type: "GET_PRODUCT_DETAIL_ERROR",
        payload: { error },
      });
    }
  };
}

export const productAction = { getProducts, getProductDetail };
