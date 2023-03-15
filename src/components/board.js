import React from "react";
import styles from './board.module.css'

import { useSelector } from "react-redux";

const Board = ()=>{

  const chessBox = useSelector((state)=>state.spaces);
  let squares = [];

  // console.log(chessBox);

  // chessBox.forEach((key,val) => {

  //   console.log(key,val);
    
  // });


    // const squares = Array(64)
    // .fill(0)
    // .map((_, index) => {
    //   const row = 8 - Math.floor(index / 8);
    //   const col = (index % 8) + 1;
    //   const color = (row + col) % 2 === 0 ? styles.black : styles.white;
    //   return (
    //     <div
    //       key={index}
    //       className={`${styles.square} ${color}`}
    //     >
    //       {col}
    //       {row}
    //     </div>
    //   );
    // });

    chessBox.forEach((key,val)=>{
      squares.push(
        <div>
          {}
        </div>
      )
    })

  return (
    <div className={styles.gridContainer}>
      {squares.map((square, index) => (
        <div key={index}>{square}</div>
      ))}
    </div>
  );
};

export default Board;




