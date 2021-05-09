import { SEARCHITEM, REMOVELIST } from "../actions/types";

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SEARCHITEM:
      return {
        ...state,
        items: payload,
      };
    case REMOVELIST:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}
