import blackpawn1 from "../components/blackPieces/Peon.png";
import blackpawn2 from "../components/blackPieces/Peon.png";
import blackpawn3 from "../components/blackPieces/Peon.png";
import blackpawn4 from "../components/blackPieces/Peon.png";
import blackpawn5 from "../components/blackPieces/Peon.png";
import blackpawn6 from "../components/blackPieces/Peon.png";
import blackpawn7 from "../components/blackPieces/Peon.png";
import blackpawn8 from "../components/blackPieces/Peon.png";
import balckbishop1 from "../components/blackPieces/Tower.png";
import balckbishop2 from "../components/blackPieces/Tower.png";
import blackknight1 from "../components/blackPieces/Horse.png";
import blackknight2 from "../components/blackPieces/Horse.png";
import balckrook1 from "../components/blackPieces/Bishop.png";
import balckrook2 from "../components/blackPieces/Bishop.png";
import blackqueen from "../components/blackPieces/Lady.png";
import blackking from "../components/blackPieces/King.png";
import whitepawn1 from "../components/whitePieces/Peon.png";
import whitepawn2 from "../components/whitePieces/Peon.png";
import whitepawn3 from "../components/whitePieces/Peon.png";
import whitepawn4 from "../components/whitePieces/Peon.png";
import whitepawn5 from "../components/whitePieces/Peon.png";
import whitepawn6 from "../components/whitePieces/Peon.png";
import whitepawn7 from "../components/whitePieces/Peon.png";
import whitepawn8 from "../components/whitePieces/Peon.png";
import whitebishop1 from "../components/whitePieces/Tower.png";
import whitebishop2 from "../components/whitePieces/Tower.png";
import whiteknight1 from "../components/whitePieces/Horse.png";
import whiteknight2 from "../components/whitePieces/Horse.png";
import whiterook1 from "../components/whitePieces/Bishop.png";
import whiterook2 from "../components/whitePieces/Bishop.png";
import whitequeen from "../components/whitePieces/Lady.png";
import whiteking from "../components/whitePieces/King.png";

import { legacy_createStore } from "redux";

let blackPieces = {
  pawn1: blackpawn1,
  pawn2: blackpawn2,
  pawn3: blackpawn3,
  pawn4: blackpawn4,
  pawn5: blackpawn5,
  pawn6: blackpawn6,
  pawn7: blackpawn7,
  pawn8: blackpawn8,

  bishop1: balckbishop1,
  bishop2: balckbishop2,

  knight1: blackknight1,
  knight2: blackknight2,

  rook1: balckrook1,
  rook2: balckrook2,

  queen: blackqueen,
  king: blackking,
};

let whitePieces = {
  pawn1: whitepawn1,
  pawn2: whitepawn2,
  pawn3: whitepawn3,
  pawn4: whitepawn4,
  pawn5: whitepawn5,
  pawn6: whitepawn6,
  pawn7: whitepawn7,
  pawn8: whitepawn8,

  bishop1: whitebishop1,
  bishop2: whitebishop2,

  knight1: whiteknight1,
  knight2: whiteknight2,

  rook1: whiterook1,
  rook2: whiterook2,

  queen: whitequeen,
  king: whiteking,
};

let boxState = {
  spaces: {
    0: blackPieces.bishop1,
    1: blackPieces.knight1,
    2: blackPieces.rook1,
    3: blackPieces.queen,
    4: blackPieces.king,
    5: blackPieces.rook2,
    6: blackPieces.knight2,
    7: blackPieces.bishop2,
    8: blackPieces.pawn1,
    9: blackPieces.pawn2,
    10: blackPieces.pawn3,
    11: blackPieces.pawn4,
    12: blackPieces.pawn5,
    13: blackPieces.pawn6,
    14: blackPieces.pawn7,
    15: blackPieces.pawn8,
    16: "",
    17: "",
    18: "",
    19: "",
    20: "",
    21: "",
    22: "",
    23: "",
    24: "",
    25: "",
    26: "",
    27: "",
    28: "",
    29: "",
    30: "",
    31: "",
    32: "",
    33: "",
    34: "",
    35: "",
    36: "",
    37: "",
    38: "",
    39: "",
    40: "",
    41: "",
    42: "",
    43: "",
    44: "",
    45: "",
    46: "",
    47: "",
    48: whitePieces.pawn1,
    49: whitePieces.pawn2,
    50: whitePieces.pawn3,
    51: whitePieces.pawn4,
    52: whitePieces.pawn5,
    53: whitePieces.pawn6,
    54: whitePieces.pawn7,
    55: whitePieces.pawn8,
    56: whitePieces.bishop1,
    57: whitePieces.knight1,
    58: whitePieces.rook1,
    59: whitePieces.queen,
    60: whitePieces.king,
    61: whitePieces.rook2,
    62: whitePieces.knight2,
    63: whitePieces.bishop2,
  },
  playerTurn: "white",
  activeCell: "",
  currentPiece: "",
};

const reducer = (state = boxState, action) => {
  if (action.type === "show") {
    // console.log(state.spaces[63]);
    const slice = action.boxIndex;
    // console.log(slice);
    return {
      spaces: state.spaces,
      currentPiece: state.currentPiece,
      playerTurn: state.playerTurn,
      activeCell: (state.activeCell = action.boxIndex),
    };
  }

  return state;
};

const store = legacy_createStore(reducer);

export default store;
