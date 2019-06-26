import { takeEvery, takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import _ from "lodash";

//worker saga
export function* getProductDataAsync() {
  try {
    const response = yield call(axios.get, "/product_data.json");
    yield put({ type: "GET_PRODUCT_DATA_FROM_API", val: response.data });
  } catch (e) {
    console.log("saga worker falied");
  }
}

//root saga
export default function* rootSaga() {
  yield takeEvery("GET_PRODUCT_DATA", getProductDataAsync);
}
