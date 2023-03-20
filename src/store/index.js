import possibleBox from "../components/icon/green-circle-round-3d-button-1-cover.jpg";
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
import blackrook1 from "../components/blackPieces/Bishop.png";
import blackrook2 from "../components/blackPieces/Bishop.png";
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

const leftedges = [0, 8, 16, 24, 32, 40, 48, 56];
const rightedges = [7, 15, 23, 31, 39, 47, 55, 63];
const topedges = [0, 1, 2, 3, 4, 5, 6, 7];
const bottomedges = [56, 57, 58, 59, 60, 61, 62, 63];

let blackPieces = {
  validmove: { piece: possibleBox, name: "validmove", type: "valid" },
  pawn1: { piece: blackpawn1, name: "blackpawn1", type: "black" },
  pawn2: { piece: blackpawn2, name: "blackpawn2", type: "black" },
  pawn3: { piece: blackpawn3, name: "blackpawn3", type: "black" },
  pawn4: { piece: blackpawn4, name: "blackpawn4", type: "black" },
  pawn5: { piece: blackpawn5, name: "blackpawn5", type: "black" },
  pawn6: { piece: blackpawn6, name: "blackpawn6", type: "black" },
  pawn7: { piece: blackpawn7, name: "blackpawn7", type: "black" },
  pawn8: { piece: blackpawn8, name: "blackpawn8", type: "black" },

  bishop1: { piece: balckbishop1, name: "blackbishop1", type: "black" },
  bishop2: { piece: balckbishop2, name: "blackbishop2", type: "black" },

  knight1: { piece: blackknight1, name: "blackknight1", type: "black" },
  knight2: { piece: blackknight2, name: "blackknight2", type: "black" },

  rook1: { piece: blackrook1, name: "blackrook1", type: "black" },
  rook2: { piece: blackrook2, name: "blackrook2", type: "black" },

  queen: { piece: blackqueen, name: "blackqueen", type: "black" },
  king: { piece: blackking, name: "blackking", type: "black" },
};

let whitePieces = {
  pawn1: { piece: whitepawn1, name: "whitepawn1", type: "white" },
  pawn2: { piece: whitepawn2, name: "whitepawn2", type: "white" },
  pawn3: { piece: whitepawn3, name: "whitepawn3", type: "white" },
  pawn4: { piece: whitepawn4, name: "whitepawn4", type: "white" },
  pawn5: { piece: whitepawn5, name: "whitepawn5", type: "white" },
  pawn6: { piece: whitepawn6, name: "whitepawn6", type: "white" },
  pawn7: { piece: whitepawn7, name: "whitepawn7", type: "white" },
  pawn8: { piece: whitepawn8, name: "whitepawn8", type: "white" },

  bishop1: { piece: whitebishop1, name: "whitebishop", type: "white" },
  bishop2: { piece: whitebishop2, name: "whitebishop", type: "white" },

  knight1: { piece: whiteknight1, name: "whiteknight1", type: "white" },
  knight2: { piece: whiteknight2, name: "whiteknight2", type: "white" },

  rook1: { piece: whiterook1, name: "whiterook1", type: "white" },
  rook2: { piece: whiterook2, name: "whiterook2", type: "white" },

  queen: { piece: whitequeen, name: "whitequeen", type: "white" },
  king: { piece: whiteking, name: "whiteking", type: "white" },
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
    14: whitePieces.pawn1,
    15: blackPieces.pawn8,
    16: whitePieces.pawn1,
    17: "",
    18: "",
    19: "",
    20: "",
    21: "",
    22: "",
    23: whitePieces.pawn1,
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

let ValidBoxes = [];
let original = {};

const reducer = (state = boxState, action) => {
  if (action.type === "showValid") {
    const currentpieceIndex = action.boxIndex;
    const currentpieceName = state.spaces[action.boxIndex].name;

    ValidBoxes.forEach((idx) => {
      if (state.spaces[idx].name === "validmove") {
        state.spaces[idx] = original[idx];
      }
    });

    console.log(ValidBoxes);
    console.log(original);

    switch (currentpieceName) {
      case "blackpawn1":
        if (leftedges.includes(currentpieceIndex)) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 9].type === "white") {
            ValidBoxes.push(currentpieceIndex + 9);
            original[currentpieceIndex + 9] =
              state.spaces[currentpieceIndex + 9];
            boxState.spaces[currentpieceIndex + 9] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }

        if (rightedges.includes(currentpieceIndex)) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 7].type === "white") {
            ValidBoxes.push(currentpieceIndex + 7);
            original[currentpieceIndex + 7] =
              state.spaces[currentpieceIndex + 7];
            boxState.spaces[currentpieceIndex + 7] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }
        if (
          !rightedges.includes(currentpieceIndex) &&
          !leftedges.includes(currentpieceIndex)
        ) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 7].type === "white") {
            ValidBoxes.push(currentpieceIndex + 7);
            original[currentpieceIndex + 7] =
              state.spaces[currentpieceIndex + 7];
            boxState.spaces[currentpieceIndex + 7] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
          if (state.spaces[currentpieceIndex + 9].type === "white") {
            ValidBoxes.push(currentpieceIndex + 9);
            original[currentpieceIndex + 9] =
              state.spaces[currentpieceIndex + 9];
            boxState.spaces[currentpieceIndex + 9] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }

        console.log(currentpieceName);
        break;

      case "blackpawn2":
        if (leftedges.includes(currentpieceIndex)) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 9].type === "white") {
            ValidBoxes.push(currentpieceIndex + 9);
            original[currentpieceIndex + 9] =
              state.spaces[currentpieceIndex + 9];
            boxState.spaces[currentpieceIndex + 9] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }

        if (rightedges.includes(currentpieceIndex)) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 7].type === "white") {
            ValidBoxes.push(currentpieceIndex + 7);
            original[currentpieceIndex + 7] =
              state.spaces[currentpieceIndex + 7];
            boxState.spaces[currentpieceIndex + 7] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }
        if (
          !rightedges.includes(currentpieceIndex) &&
          !leftedges.includes(currentpieceIndex)
        ) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 7].type === "white") {
            ValidBoxes.push(currentpieceIndex + 7);
            original[currentpieceIndex + 7] =
              state.spaces[currentpieceIndex + 7];
            boxState.spaces[currentpieceIndex + 7] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
          if (state.spaces[currentpieceIndex + 9].type === "white") {
            ValidBoxes.push(currentpieceIndex + 9);
            original[currentpieceIndex + 9] =
              state.spaces[currentpieceIndex + 9];
            boxState.spaces[currentpieceIndex + 9] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }
        console.log(currentpieceName);
        break;

      case "blackpawn3":
        if (leftedges.includes(currentpieceIndex)) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 9].type === "white") {
            ValidBoxes.push(currentpieceIndex + 9);
            original[currentpieceIndex + 9] =
              state.spaces[currentpieceIndex + 9];
            boxState.spaces[currentpieceIndex + 9] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }

        if (rightedges.includes(currentpieceIndex)) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 7].type === "white") {
            ValidBoxes.push(currentpieceIndex + 7);
            original[currentpieceIndex + 7] =
              state.spaces[currentpieceIndex + 7];
            boxState.spaces[currentpieceIndex + 7] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }
        if (
          !rightedges.includes(currentpieceIndex) &&
          !leftedges.includes(currentpieceIndex)
        ) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 7].type === "white") {
            ValidBoxes.push(currentpieceIndex + 7);
            original[currentpieceIndex + 7] =
              state.spaces[currentpieceIndex + 7];
            boxState.spaces[currentpieceIndex + 7] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
          if (state.spaces[currentpieceIndex + 9].type === "white") {
            ValidBoxes.push(currentpieceIndex + 9);
            original[currentpieceIndex + 9] =
              state.spaces[currentpieceIndex + 9];
            boxState.spaces[currentpieceIndex + 9] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }
        console.log(currentpieceName);
        break;

      case "blackpawn4":
        if (leftedges.includes(currentpieceIndex)) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 9].type === "white") {
            ValidBoxes.push(currentpieceIndex + 9);
            original[currentpieceIndex + 9] =
              state.spaces[currentpieceIndex + 9];
            boxState.spaces[currentpieceIndex + 9] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }

        if (rightedges.includes(currentpieceIndex)) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 7].type === "white") {
            ValidBoxes.push(currentpieceIndex + 7);
            original[currentpieceIndex + 7] =
              state.spaces[currentpieceIndex + 7];
            boxState.spaces[currentpieceIndex + 7] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }
        if (
          !rightedges.includes(currentpieceIndex) &&
          !leftedges.includes(currentpieceIndex)
        ) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 7].type === "white") {
            ValidBoxes.push(currentpieceIndex + 7);
            original[currentpieceIndex + 7] =
              state.spaces[currentpieceIndex + 7];
            boxState.spaces[currentpieceIndex + 7] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
          if (state.spaces[currentpieceIndex + 9].type === "white") {
            ValidBoxes.push(currentpieceIndex + 9);
            original[currentpieceIndex + 9] =
              state.spaces[currentpieceIndex + 9];
            boxState.spaces[currentpieceIndex + 9] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }
        console.log(currentpieceName);
        break;

      case "blackpawn5":
        if (leftedges.includes(currentpieceIndex)) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 9].type === "white") {
            ValidBoxes.push(currentpieceIndex + 9);
            original[currentpieceIndex + 9] =
              state.spaces[currentpieceIndex + 9];
            boxState.spaces[currentpieceIndex + 9] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }

        if (rightedges.includes(currentpieceIndex)) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 7].type === "white") {
            ValidBoxes.push(currentpieceIndex + 7);
            original[currentpieceIndex + 7] =
              state.spaces[currentpieceIndex + 7];
            boxState.spaces[currentpieceIndex + 7] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }
        if (
          !rightedges.includes(currentpieceIndex) &&
          !leftedges.includes(currentpieceIndex)
        ) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 7].type === "white") {
            ValidBoxes.push(currentpieceIndex + 7);
            original[currentpieceIndex + 7] =
              state.spaces[currentpieceIndex + 7];
            boxState.spaces[currentpieceIndex + 7] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
          if (state.spaces[currentpieceIndex + 9].type === "white") {
            ValidBoxes.push(currentpieceIndex + 9);
            original[currentpieceIndex + 9] =
              state.spaces[currentpieceIndex + 9];
            boxState.spaces[currentpieceIndex + 9] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }
        console.log(currentpieceName);
        break;

      case "blackpawn6":
        if (leftedges.includes(currentpieceIndex)) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 9].type === "white") {
            ValidBoxes.push(currentpieceIndex + 9);
            original[currentpieceIndex + 9] =
              state.spaces[currentpieceIndex + 9];
            boxState.spaces[currentpieceIndex + 9] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }

        if (rightedges.includes(currentpieceIndex)) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 7].type === "white") {
            ValidBoxes.push(currentpieceIndex + 7);
            original[currentpieceIndex + 7] =
              state.spaces[currentpieceIndex + 7];
            boxState.spaces[currentpieceIndex + 7] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }
        if (
          !rightedges.includes(currentpieceIndex) &&
          !leftedges.includes(currentpieceIndex)
        ) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 7].type === "white") {
            ValidBoxes.push(currentpieceIndex + 7);
            original[currentpieceIndex + 7] =
              state.spaces[currentpieceIndex + 7];
            boxState.spaces[currentpieceIndex + 7] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
          if (state.spaces[currentpieceIndex + 9].type === "white") {
            ValidBoxes.push(currentpieceIndex + 9);
            original[currentpieceIndex + 9] =
              state.spaces[currentpieceIndex + 9];
            boxState.spaces[currentpieceIndex + 9] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }
        console.log(currentpieceName);
        break;

      case "blackpawn7":
        if (leftedges.includes(currentpieceIndex)) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 9].type === "white") {
            ValidBoxes.push(currentpieceIndex + 9);
            original[currentpieceIndex + 9] =
              state.spaces[currentpieceIndex + 9];
            boxState.spaces[currentpieceIndex + 9] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }

        if (rightedges.includes(currentpieceIndex)) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 7].type === "white") {
            ValidBoxes.push(currentpieceIndex + 7);
            original[currentpieceIndex + 7] =
              state.spaces[currentpieceIndex + 7];
            boxState.spaces[currentpieceIndex + 7] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }
        if (
          !rightedges.includes(currentpieceIndex) &&
          !leftedges.includes(currentpieceIndex)
        ) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 7].type === "white") {
            ValidBoxes.push(currentpieceIndex + 7);
            original[currentpieceIndex + 7] =
              state.spaces[currentpieceIndex + 7];
            boxState.spaces[currentpieceIndex + 7] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
          if (state.spaces[currentpieceIndex + 9].type === "white") {
            ValidBoxes.push(currentpieceIndex + 9);
            original[currentpieceIndex + 9] =
              state.spaces[currentpieceIndex + 9];
            boxState.spaces[currentpieceIndex + 9] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }
        console.log(currentpieceName);
        break;

      case "blackpawn8":
        if (leftedges.includes(currentpieceIndex)) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 9].type === "white") {
            ValidBoxes.push(currentpieceIndex + 9);
            original[currentpieceIndex + 9] =
              state.spaces[currentpieceIndex + 9];
            boxState.spaces[currentpieceIndex + 9] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }

        if (rightedges.includes(currentpieceIndex)) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 7].type === "white") {
            ValidBoxes.push(currentpieceIndex + 7);
            original[currentpieceIndex + 7] =
              state.spaces[currentpieceIndex + 7];
            boxState.spaces[currentpieceIndex + 7] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }
        if (
          !rightedges.includes(currentpieceIndex) &&
          !leftedges.includes(currentpieceIndex)
        ) {
          if (state.spaces[currentpieceIndex + 8].name === undefined) {
            ValidBoxes.push(currentpieceIndex + 8);
            original[currentpieceIndex + 8] =
              state.spaces[currentpieceIndex + 8];
            boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 8]);
          }
          if (state.spaces[currentpieceIndex + 7].type === "white") {
            ValidBoxes.push(currentpieceIndex + 7);
            original[currentpieceIndex + 7] =
              state.spaces[currentpieceIndex + 7];
            boxState.spaces[currentpieceIndex + 7] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
          if (state.spaces[currentpieceIndex + 9].type === "white") {
            ValidBoxes.push(currentpieceIndex + 9);
            original[currentpieceIndex + 9] =
              state.spaces[currentpieceIndex + 9];
            boxState.spaces[currentpieceIndex + 9] = blackPieces.validmove;

            // console.log(boxState.spaces[currentpieceIndex + 9]);
          }
        }
        console.log(currentpieceName);
        break;

      case "blackbishop1":
        console.log(currentpieceName);
        break;

      case "blackbishop2":
        console.log(currentpieceName);
        break;

      case "blackknight1":
        console.log(currentpieceName);
        break;

      case "blackknight2":
        console.log(currentpieceName);
        break;

      case "blackrook1":
        if (topedges.includes(currentpieceIndex)) {
          let proceed = true;
          for (let index = 9; proceed === true; index += 9) {
            if (
              rightedges.includes(currentpieceIndex + index) ||
              state.spaces[currentpieceIndex + index].type === "black"
            ) {
              proceed = false;
            }
            if (state.spaces[currentpieceIndex + index].type === "white") {
              ValidBoxes.push(currentpieceIndex + index);
              original[currentpieceIndex + index] =
                state.spaces[currentpieceIndex + index];
              boxState.spaces[currentpieceIndex + index] =
                blackPieces.validmove;
              proceed = false;
            }
            if (state.spaces[currentpieceIndex + index].name === undefined) {
              ValidBoxes.push(currentpieceIndex + index);
              original[currentpieceIndex + index] =
                state.spaces[currentpieceIndex + index];
              boxState.spaces[currentpieceIndex + index] =
                blackPieces.validmove;
            }
          }
          proceed = true;
          for (let index = 7; proceed === true; index += 7) {
            if (
              leftedges.includes(currentpieceIndex + index) ||
              state.spaces[currentpieceIndex + index].type === "black"
            ) {
              proceed = false;
            }
            if (state.spaces[currentpieceIndex + index].type === "white") {
              ValidBoxes.push(currentpieceIndex + index);
              original[currentpieceIndex + index] =
                state.spaces[currentpieceIndex + index];
              boxState.spaces[currentpieceIndex + index] =
                blackPieces.validmove;
              proceed = false;
            }
            if (state.spaces[currentpieceIndex + index].name === undefined) {
              ValidBoxes.push(currentpieceIndex + index);
              original[currentpieceIndex + index] =
                state.spaces[currentpieceIndex + index];
              boxState.spaces[currentpieceIndex + index] =
                blackPieces.validmove;
            }
          }
        }
        ////////////////////////////////////////////////////////////////////////////
        if (leftedges.includes(currentpieceIndex)) {
          let proceed = true;
          for (let index = 9; proceed === true; index += 9) {
            if (
              bottomedges.includes(currentpieceIndex + index) ||
              state.spaces[currentpieceIndex + index].type === "black"
            ) {
              proceed = false;
            }
            if (state.spaces[currentpieceIndex + index].type === "white") {
              ValidBoxes.push(currentpieceIndex + index);
              original[currentpieceIndex + index] =
                state.spaces[currentpieceIndex + index];
              boxState.spaces[currentpieceIndex + index] =
                blackPieces.validmove;
              proceed = false;
            }
            if (state.spaces[currentpieceIndex + index].name === undefined) {
              ValidBoxes.push(currentpieceIndex + index);
              original[currentpieceIndex + index] =
                state.spaces[currentpieceIndex + index];
              boxState.spaces[currentpieceIndex + index] =
                blackPieces.validmove;
            }
          }
          proceed = true;
          for (let index = 9; proceed === true; index += 9) {
            if (
              leftedges.includes(currentpieceIndex + index) ||
              state.spaces[currentpieceIndex + index].type === "black"
            ) {
              proceed = false;
            }
            if (state.spaces[currentpieceIndex + index].type === "white") {
              ValidBoxes.push(currentpieceIndex + index);
              original[currentpieceIndex + index] =
                state.spaces[currentpieceIndex + index];
              boxState.spaces[currentpieceIndex + index] =
                blackPieces.validmove;
              proceed = false;
            }
            if (state.spaces[currentpieceIndex + index].name === undefined) {
              ValidBoxes.push(currentpieceIndex + index);
              original[currentpieceIndex + index] =
                state.spaces[currentpieceIndex + index];
              boxState.spaces[currentpieceIndex + index] =
                blackPieces.validmove;
            }
          }
        }
        ////////////////////////////////////////////////////////////////////////////
        console.log(currentpieceName);
        break;

      case "blackrook2":
        if (topedges.includes(currentpieceIndex)) {
          let proceed = true;
          for (let index = 9; proceed === true; index += 9) {
            if (
              rightedges.includes(currentpieceIndex + index) ||
              state.spaces[currentpieceIndex + index].type === "black"
            ) {
              proceed = false;
            }
            if (state.spaces[currentpieceIndex + index].type === "white") {
              ValidBoxes.push(currentpieceIndex + index);
              original[currentpieceIndex + index] =
                state.spaces[currentpieceIndex + index];
              boxState.spaces[currentpieceIndex + index] =
                blackPieces.validmove;
              proceed = false;
            }
            if (state.spaces[currentpieceIndex + index].name === undefined) {
              ValidBoxes.push(currentpieceIndex + index);
              original[currentpieceIndex + index] =
                state.spaces[currentpieceIndex + index];
              boxState.spaces[currentpieceIndex + index] =
                blackPieces.validmove;
            }
          }
          proceed = true;
          for (let index = 7; proceed === true; index += 7) {
            if (
              leftedges.includes(currentpieceIndex + index) ||
              state.spaces[currentpieceIndex + index].type === "black"
            ) {
              proceed = false;
            }
            if (state.spaces[currentpieceIndex + index].type === "white") {
              ValidBoxes.push(currentpieceIndex + index);
              original[currentpieceIndex + index] =
                state.spaces[currentpieceIndex + index];
              boxState.spaces[currentpieceIndex + index] =
                blackPieces.validmove;
              proceed = false;
            }
            if (state.spaces[currentpieceIndex + index].name === undefined) {
              ValidBoxes.push(currentpieceIndex + index);
              original[currentpieceIndex + index] =
                state.spaces[currentpieceIndex + index];
              boxState.spaces[currentpieceIndex + index] =
                blackPieces.validmove;
            }
          }
        }
        console.log(currentpieceName);
        break;

      case "blackqueen":
        console.log(currentpieceName);
        break;

      case "blackking":
        console.log(currentpieceName);
        break;

      default:
        break;
    }

    return {
      spaces: state.spaces,
      currentPiece: state.currentPiece,
      playerTurn: state.playerTurn,
      activeCell: (state.activeCell = action.boxIndex),
    };
  }

  if (action.type === "movePiece") {
    // console.log();
    state.spaces[action.position] = state.spaces[state.activeCell];
    state.spaces[state.activeCell] = "";
    ValidBoxes.forEach((idx) => {
      if (state.spaces[idx].name === "validmove") {
        state.spaces[idx] = original[idx];
      }
    });
    // ValidBoxes.forEach(idx => {
    //   if (idx!==action.position) {
    //     console.log(state.spaces[idx],original.idx);
    //     state.spaces[idx] = original.idx
    //   }
    //   })

    ValidBoxes = [];
  }
  return {
    spaces: state.spaces,
    currentPiece: state.currentPiece,
    playerTurn: state.playerTurn,
    activeCell: (state.activeCell = action.boxIndex),
  };
};

const store = legacy_createStore(reducer);

export default store;
