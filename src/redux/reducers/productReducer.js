let initialState = {
  productList: [],
  product: null,
  getProductsError: "",
  getProductDetailError: "",
};

function productReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_PRODUCTS":
      return { ...state, productList: payload.data };
    case "GET_PRODUCTS_ERROR":
      return { ...state, getProductsError: payload.error };
    case "GET_PRODUCT_DETAIL":
      return { ...state, product: payload.data };
    case "GET_PRODUCT_DETAIL_ERROR":
      return { ...state, getProductDetailError: payload.error };
    default:
      return { ...state };
  }
}

export default productReducer;
