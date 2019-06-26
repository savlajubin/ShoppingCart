
const initialState = {
  cartData: [],
  productData: []
};

const cartReducer = (state = initialState, action) => {
  console.log(11, action)
  switch (action.type) {
    
    default:
      return state;
  }
};

export default cartReducer