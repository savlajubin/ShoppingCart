const initialState = {
  cartData: {},
  productData: [
    {
      isPublished: "true",
      productName: "Apple iPhone X",
      productImage:
        "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png",
      price: "299"
    },
    {
      isPublished: "true",
      productName: "Apple iPhone 8",
      productImage:
        "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8-silver-grid.png",
      price: "100"
    },
    {
      isPublished: "false",
      productName: "Apple iPhone 8 Plus",
      productImage:
        "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-8/iphone-8plus-space-grey-grid.png",
      price: "99"
    },
    {
      isPublished: "true",
      productName: "Samsung Galaxy S9",
      productImage:
        "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/samsung-galaxy-s9/samsung-galaxy-s9-purple-front.png",
      price: "149"
    },
    {
      isPublished: "true",
      productName: "OPPO R15 Pro",
      productImage:
        "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/oppo-r15-pro/oppo-r15-device-front.png",
      price: "199"
    },
    {
      isPublished: "true",
      productName: "Sony Xperia XA2",
      productImage:
        "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/sony-xperia-xa2/sony_xperia_xa2_front_v1.png",
      price: "19"
    }
  ]
};

const productInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_DATA_FROM_API":
    console.log('state',state)
      return {
        ...state,
        productData: action.val
      }
    case "GET_CART_DATA":
      return state.cartData;
    default:
      return state;
  }
};

export default productInfoReducer