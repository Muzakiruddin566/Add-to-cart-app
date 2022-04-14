import { combineReducers } from "redux";
const initialState = {
  arr: [],
};

const handlerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addNewCart":
      return {
        ...state,
        arr: [...state.arr, action.payload],
      };
    case "deleteCart":
      return {
        ...state,
        arr: state.arr.filter((item) => item.id !== action.payload),
      };
    case "increase":
      return {
        ...state,
        arr: state.arr.filter((item) =>
          item.id === action.payload ? item.quantity++ : item.quantity
        ),
      };
    case "decrease":
      return {
        ...state,
        arr: state.arr.filter((item) =>
          item.id === action.payload ? item.quantity-- : item.quantity
        ),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  handlerReducer,
});

export default rootReducer;
