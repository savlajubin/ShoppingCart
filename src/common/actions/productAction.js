export const getProductData = () => {
  return {
    type: "GET_PRODUCT_DATA"
  };
};

export const getcartData = () => {
  return {
    type: "GET_CART_DATA"
  };
};

export const addToCart = (productDetail) => {
  return {
    type: "ADD_TO_CART",
    val: productDetail
  };
};

export const removeFromCart = (productDetail) => {
  return {
    type: "REMOVE_FROM_CART",
    val: productDetail
  };
};
