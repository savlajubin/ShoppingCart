/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";
import * as commonReducers from "./reducers/index";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    ...commonReducers,
    ...injectedReducers
  });

  return rootReducer;
}
