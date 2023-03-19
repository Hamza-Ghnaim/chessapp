import React, { useEffect } from "react";
import styles from "./board.module.css";

import { useSelector, useDispatch } from "react-redux";

const Board = () => {
  const dispatch = useDispatch();
  const chessBox = useSelector((state) => state.spaces);
  const activepiece = useSelector((state) => state.activeCell);
  let squares = [];

  const movePiece = (idx) => {
    console.log("Second");
    console.log(idx);
    dispatch({ type: "movePiece", position: idx });
  };

  const showMoves = (idx) => {
    console.log("First");
    console.log(idx);
    dispatch({ type: "showValid", boxIndex: idx });
  };

  Object.keys(chessBox).forEach((key, index) => {
    const row = 8 - Math.floor(index / 8);
    const col = (index % 8) + 1;
    const color = (row + col) % 2 === 0 ? styles.black : styles.white;

    chessBox[key].name === "validmove"
      ? squares.push(
          <div
            key={index}
            style={{ height: "80px", width: "80px" }}
            className={`${styles} ${color}`}
            onClick={() => movePiece(index)}
          >
            {chessBox[key].piece ? (
              <img
                src={chessBox[key].piece}
                alt="chesspiece"
                style={{ height: "60px", width: "60px" }}
              />
            ) : (
              key
            )}
          </div>
        )
      : squares.push(
          <div
            key={index}
            style={{ height: "80px", width: "80px" }}
            className={`${styles} ${color}`}
            onClick={() => showMoves(index)}
          >
            {chessBox[key].piece ? (
              <img
                src={chessBox[key].piece}
                alt="chesspiece"
                style={{ height: "60px", width: "60px" }}
              />
            ) : (
              key
            )}
          </div>
        );
  });

  return (
    <div className={styles.gridContainer}>
      {squares.map((square, index) => (
        <div key={index}>{square}</div>
      ))}
    </div>
  );
};

export default Board;
