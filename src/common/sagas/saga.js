import { takeEvery, takeLatest } from "redux-saga";
import { call, put } from "@redux-saga/core";
import axios from "axios";
import _ from "lodash";

//worker saga
export function* getProductDataAsync() {
  try {
    console.log(112233);
    // console.log("saga worker running");
    // const response = yield call(axios.get, "https://gorest.co.in/public-api/users?_format=json");
    // const response = yield call(axios.get, "/product_data.json");
    // console.log("response", response.data);
    const response = {
      data: [
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
    yield put({ type: "GET_PRODUCT_DATA_FROM_API", val: response.data });
  } catch (e) {
    console.log("saga worker falied");
  }
}

export function* getUserDataByIdAsync(val) {
  try {
    console.log("saga worker running by id", val.id);
    // const response = yield call(axios.get, "https://gorest.co.in/public-api/users?_format=json");
    const response = yield call(axios.get, "/product_data.json");
    yield put({
      type: "GET_USER_DATA_BY_ID_ASYNC",
      val: _.find(response.data, { id: val.id })
    });
  } catch (e) {
    console.log("saga worker falied");
  }
}

export function* loginUserAsync(val) {
  try {
    // const response = yield call(axios.get, "https://gorest.co.in/public-api/users?_format=json");
    const response = yield call(axios.get, "/product_data.json");
    console.log("saga worker running by id", val, response, _);

    let foundUser = _.find(response.data, {
      username: val.formData.username,
      password: val.formData.password
    });
    if (foundUser) {
      yield put({ type: "LOGIN_USER_ASYNC", val: foundUser });
    } else {
      yield put({ type: "LOGIN_USER_FAILED_ASYNC", msg: "User Not Found" });
    }
  } catch (e) {
    console.log("saga worker falied");
  }
}

//watcher saga
export function* watchGetUserData() {
  // console.log("saga running");
  yield takeEvery("GET_PRODUCT_DATA", getProductDataAsync);
}

export function* watchGetUserDataById() {
  // console.log("saga called ib id", action);
  yield takeLatest("GET_USER_DATA_BY_ID", getUserDataByIdAsync);
}

export function* watchLogin() {
  // console.log("saga called ib id", action);
  yield takeLatest("LOGIN_USER", loginUserAsync);
}

//root saga
export default function* rootSaga() {
  yield [watchGetUserData(), watchGetUserDataById(), watchLogin()];
}
