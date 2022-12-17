function getProducts(query) {
  return async (dispatch, getState) => {
    const searchQuery = query.get("q") || "";
    const url = `http://localhost:5000/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "GET_PRODUCTS", payload: { data } });
  };
}

export const productAction = { getProducts };
