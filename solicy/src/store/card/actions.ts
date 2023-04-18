import { nanoid } from "nanoid";
import { ActionCreator } from "redux";

export interface CardState {
  num: number;
  id: string;
}

export const CREATE_CARD = "CREATE_CARD";
export type createCardAction = {
  type: typeof CREATE_CARD;
  num: number;
  id: string;
};

export const createCard: ActionCreator<createCardAction> = (num) => ({
  type: CREATE_CARD,
  num,
  id: nanoid(),
});
