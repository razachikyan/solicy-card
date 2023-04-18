import React from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { CardState, createCard } from "../../store/card/actions";
import { RootState, sortCards } from "../../store/reducer";

export function Header() {
  const dispatch = useDispatch();
  const cards = useSelector<RootState, Array<CardState>>(
    (store) => store.cards
  );
  return (
    <header className="header">
      <button
        className="header__btn"
        onClick={() => {
          const number = Math.round(Math.random() * 1000);
          dispatch(createCard(number));
        }}
      >
        add card
      </button>
      <button
        onClick={() => {
          dispatch(sortCards(cards));
        }}
        className="header__btn"
      >
        sort cards
      </button>
    </header>
  );
}
