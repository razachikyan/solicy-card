import React from "react";
import "./card.css";
import { Close } from "../Icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { RootState, deleteCard } from "../../store/reducer";
import { CardState } from "../../store/card/actions";

interface ICardProps {
  num: number;
  id: string;
}

export function Card({ num, id }: ICardProps) {
  const dispatch = useDispatch();
  const cards = useSelector<RootState, CardState[]>((store) => store.cards);
  return (
    <li className="card">
      <Close
        handleClick={() => {
          dispatch(deleteCard(id, cards));
        }}
      />
      {num}
    </li>
  );
}
