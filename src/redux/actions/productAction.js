function getProducts(query) {
  return async (dispatch, getState) => {
    const searchQuery = query.get("q") || "";
    const url = `http://localhost:5000/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "GET_PRODUCTS", payload: { data } });
  };
}

function getProductDetail(id) {
  return async (dispatch, getState) => {
    const url = `http://localhost:5000/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "GET_PRODUCT_DETAIL", payload: { data } });
  };
}

export const productAction = { getProducts, getProductDetail };
