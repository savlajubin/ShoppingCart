import _ from 'lodash';

const initialState = {
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
  let oldProductState, updatedProductIndex;
console.log(11223344,action)
  switch (action.type) {
    case "GET_PRODUCT_DATA_FROM_API":
      return {
        ...state,
        productData: action.val
      }
    case "ADD_TO_CART":
      oldProductState = JSON.parse(JSON.stringify(state.productData));
      updatedProductIndex = _.findIndex(oldProductState, { productName: action.val.productName });
      oldProductState[updatedProductIndex].addedToCart = true;
      return {
        ...state,
        productData: oldProductState
      }
    case "REMOVE_FROM_CART":
      console.log('jubin')
      oldProductState = JSON.parse(JSON.stringify(state.productData));
      updatedProductIndex = _.findIndex(oldProductState, { productName: action.val.productName });
      oldProductState[updatedProductIndex].addedToCart = false;
      return {
        ...state,
        productData: oldProductState
      }
    case "GET_CART_DATA":
      return state.productData;
    default:
      return state;
  }
};

export default productInfoReducer