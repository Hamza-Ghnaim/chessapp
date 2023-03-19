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

  let blackPieces = {
    validmove: { piece: possibleBox, name: "validmove" },
    pawn1: { piece: blackpawn1, name: "blackpawn1" },
    pawn2: { piece: blackpawn2, name: "blackpawn2" },
    pawn3: { piece: blackpawn3, name: "blackpawn3" },
    pawn4: { piece: blackpawn4, name: "blackpawn4" },
    pawn5: { piece: blackpawn5, name: "blackpawn5" },
    pawn6: { piece: blackpawn6, name: "blackpawn6" },
    pawn7: { piece: blackpawn7, name: "blackpawn7" },
    pawn8: { piece: blackpawn8, name: "blackpawn8" },

    bishop1: { piece: balckbishop1, name: "blackbishop1" },
    bishop2: { piece: balckbishop2, name: "blackbishop2" },

    knight1: { piece: blackknight1, name: "blackknight1" },
    knight2: { piece: blackknight2, name: "blackknight2" },

    rook1: { piece: blackrook1, name: "blackrook1" },
    rook2: { piece: blackrook2, name: "blackrook2" },

    queen: { piece: blackqueen, name: "blackqueen" },
    king: { piece: blackking, name: "blackking" },
  };

  let whitePieces = {
    pawn1: { piece: whitepawn1, name: "whitepawn1" },
    pawn2: { piece: whitepawn2, name: "whitepawn2" },
    pawn3: { piece: whitepawn3, name: "whitepawn3" },
    pawn4: { piece: whitepawn4, name: "whitepawn4" },
    pawn5: { piece: whitepawn5, name: "whitepawn5" },
    pawn6: { piece: whitepawn6, name: "whitepawn6" },
    pawn7: { piece: whitepawn7, name: "whitepawn7" },
    pawn8: { piece: whitepawn8, name: "whitepawn8" },

    bishop1: { piece: whitebishop1, name: "whitebishop1" },
    bishop2: { piece: whitebishop2, name: "whitebishop2" },

    knight1: { piece: whiteknight1, name: "whiteknight1" },
    knight2: { piece: whiteknight2, name: "whiteknight2" },

    rook1: { piece: whiterook1, name: "whiterook1" },
    rook2: { piece: whiterook2, name: "whiterook2" },

    queen: { piece: whitequeen, name: "whitequeen" },
    king: { piece: whiteking, name: "whiteking" },
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
    if (action.type === "showValid") {
      const currentpieceIndex = action.boxIndex;
      const currentpieceName = state.spaces[action.boxIndex].name;



      switch (currentpieceName) {
        case "blackpawn1":
          if (leftedges.includes(currentpieceIndex)) {
            if (state.spaces[currentpieceIndex + 8].name === undefined) {
              // ValidBoxes.push(currentpieceIndex + 8);
              boxState.spaces[currentpieceIndex + 8] = blackPieces.validmove;
              // console.log(boxState.spaces[currentpieceIndex + 8]);
            }
            if (state.spaces[currentpieceIndex + 9].name === undefined) {
              // ValidBoxes.push(currentpieceIndex + 9);
              boxState.spaces[currentpieceIndex + 9] = blackPieces.validmove;
              // console.log(boxState.spaces[currentpieceIndex + 9]);
            }
          }

          console.log(currentpieceName);
          break;

        case "blackpawn2":
          console.log(currentpieceName);
          break;

        case "blackpawn3":
          console.log(currentpieceName);
          break;

        case "blackpawn4":
          console.log(currentpieceName);
          break;

        case "blackpawn5":
          console.log(currentpieceName);
          break;

        case "blackpawn6":
          console.log(currentpieceName);
          break;

        case "blackpawn7":
          console.log(currentpieceName);
          break;

        case "blackpawn8":
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
          console.log(currentpieceName);
          break;

        case "blackrook2":
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

      console.log(state.spaces[action.position].piece);
      console.log(state.spaces[action.position].name);
      
      // state.spaces[action.position].name = state.spaces[state.activeCell].name;
      state.spaces[action.position] = state.spaces[state.activeCell];
      state.spaces[state.activeCell]=  "";
      // console.log(state.activeCell);
      
    }
    return {
      spaces: state.spaces,
      currentPiece: state.currentPiece,
      playerTurn: state.playerTurn,
      activeCell: (state.activeCell = action.boxIndex),
    };

    return state;
  };

  const store = legacy_createStore(reducer);

  export default store;
