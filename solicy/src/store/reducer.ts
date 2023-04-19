import { ActionCreator, Reducer } from "redux";
import { CREATE_CARD, CardState, createCardAction } from "./card/actions";
import { cardReducer } from "./card/reducer";

export interface RootState {
  cards: Array<CardState>;
}

const initalState = {
  cards: [],
};

export const SORT_CARDS = "SORT_CARDS";
export type sortCardsAction = {
  type: typeof SORT_CARDS;
  cards: Array<CardState>;
};

export const sortCards: ActionCreator<sortCardsAction> = (
  cards: Array<CardState>
) => {
  return {
    type: SORT_CARDS,
    cards: cards.sort((a, b) => a.num - b.num),
  };
};

export const DELETE_CARD = "DELETE_CARD";
export type deletCardAction = {
  type: typeof DELETE_CARD;
  id: string;
  cards: Array<CardState>;
};

export const deleteCard: ActionCreator<deletCardAction> = (
  id,
  cards: Array<CardState>
) => ({
  type: DELETE_CARD,
  id,
  cards: cards.filter((card) => card.id !== id),
});

type Action = createCardAction | deletCardAction | sortCardsAction;

export const rootReducer: Reducer<RootState, Action> = (
  state = initalState,
  action
) => {
  switch (action.type) {
    case SORT_CARDS:
    case DELETE_CARD:
      return { ...state, cards: [...action.cards] };
    case CREATE_CARD:
      return {
        ...state,
        cards: [...state.cards, cardReducer({ num: 0, id: "0" }, action)],
      };
    default:
      return state;
  }
};
