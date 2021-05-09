import { combineReducers } from "redux";

import auth from "./AuthReducer";
import search from "./SearchReducer";

export default combineReducers({
  auth,
  search,
});
