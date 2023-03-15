import React from "react";
import styles from './board.module.css'

import { useSelector } from "react-redux";

const Board = ()=>{

  const chessBox = useSelector((state)=>state.spaces);
  let squares = [];




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


    Object.keys(chessBox).forEach((key,index)=>{
      const row = 8 - Math.floor(index / 8);
      const col = (index % 8) + 1;
      const color = (row + col) % 2 === 0 ? styles.black : styles.white; 
      squares.push(
        <div key = {key}
        style={{"height" : "80px", "width" : "80px"}}
          className={`${styles} ${color}`}
        >
          {chessBox[key] ?<img src={chessBox[key]} alt = "chesspiece" style={{"height" : "60px", "width" : "60px"}} /> : key}
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







