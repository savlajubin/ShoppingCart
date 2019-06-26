const initialState = {
  productData: []
};

export const productInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_DATA_FROM_API":
      return state.set("productData", action.productData);
    default:
      return state;
  }
};
