import React from "react";
import "./main.css";
import { useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { RootState } from "../../store/reducer";
import { CardState } from "../../store/card/actions";

export function Main() {
  const cards = useSelector<RootState, Array<CardState>>(
    (store) => store.cards
  );

  return (
    <main className="main">
      <ul className="main__list">
        {cards.map((card) => (
          <Card key={card.id} id={card.id} num={card.num} />
        ))}
      </ul>
    </main>
  );
}
