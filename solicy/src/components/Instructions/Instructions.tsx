import React from "react";
import "./instructions.css";

export function Instructions() {
  return (
    <div className="instructions">
      <p className="instruct__text">
        Press the “add card” button to add the new Card. Use the “sort cards”
        button to sort the Cards by the increase. Press an X icon on the top
        right to delete them.
      </p>
    </div>
  );
}
