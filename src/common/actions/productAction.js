export const getProductData = () => {
  return {
    type: "GET_PRODUCT_DATA"
  };
};

export const getProductDataById = id => {
  return {
    type: "GET_USER_DATA_BY_ID",
    id
  };
};

export const updateProductData = () => {
  return {
    type: "ACTIVATE_USER_EDIT"
  };
};

export const updateCart = data => {
  return {
    type: "UPDATE_USER"
  };
};
