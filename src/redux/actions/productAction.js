function getProducts() {
  return async (dispatch, getState) => {
    const url = `http://localhost:5000/products`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "GET_PRODUCTS", payload: { data } });
  };
}

export const productAction = { getProducts };
