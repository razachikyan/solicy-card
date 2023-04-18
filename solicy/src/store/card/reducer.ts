import { Reducer } from "redux";
import { CREATE_CARD, CardState, createCardAction } from "./actions";
import { nanoid } from "nanoid";

export const cardReducer: Reducer<CardState, createCardAction> = (
  state = { num: 0, id: "0" },
  action
) => {
  switch (action.type) {
    case CREATE_CARD:
      return {
        ...state,
        num: action.num,
        id: nanoid(),
      };
    default:
      return state;
  }
};
