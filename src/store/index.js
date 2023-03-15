import blackpawn1 from '../components/blackPieces/Peon.png';
import blackpawn2 from '../components/blackPieces/Peon.png';
import blackpawn3 from '../components/blackPieces/Peon.png';
import blackpawn4 from '../components/blackPieces/Peon.png';
import blackpawn5 from '../components/blackPieces/Peon.png';
import blackpawn6 from '../components/blackPieces/Peon.png';
import blackpawn7 from '../components/blackPieces/Peon.png';
import blackpawn8 from '../components/blackPieces/Peon.png';
import balckbishop1 from '../components/blackPieces/Tower.png';
import balckbishop2 from '../components/blackPieces/Tower.png';
import blackknight1 from '../components/blackPieces/Horse.png';
import blackknight2 from '../components/blackPieces/Horse.png';
import balckrook1 from '../components/blackPieces/Bishop.png';
import balckrook2 from '../components/blackPieces/Bishop.png';
import blackqueen from '../components/blackPieces/Lady.png';
import blackking from '../components/blackPieces/King.png';
import whitepawn1 from '../components/whitePieces/Peon.png';
import whitepawn2 from '../components/whitePieces/Peon.png';
import whitepawn3 from '../components/whitePieces/Peon.png';
import whitepawn4 from '../components/whitePieces/Peon.png';
import whitepawn5 from '../components/whitePieces/Peon.png';
import whitepawn6 from '../components/whitePieces/Peon.png';
import whitepawn7 from '../components/whitePieces/Peon.png';
import whitepawn8 from '../components/whitePieces/Peon.png';
import whitebishop1 from '../components/whitePieces/Tower.png';
import whitebishop2 from '../components/whitePieces/Tower.png';
import whiteknight1 from '../components/whitePieces/Horse.png';
import whiteknight2 from '../components/whitePieces/Horse.png';
import whiterook1 from '../components/whitePieces/Bishop.png';
import whiterook2 from '../components/whitePieces/Bishop.png';
import whitequeen from '../components/whitePieces/Lady.png';
import whiteking from '../components/whitePieces/King.png';

import { legacy_createStore } from "redux";

let blackPieces = {

    'pawn1':blackpawn1,
    'pawn2':blackpawn2,
    'pawn3':blackpawn3,
    'pawn4':blackpawn4,
    'pawn5':blackpawn5,
    'pawn6':blackpawn6,
    'pawn7':blackpawn7,
    'pawn8':blackpawn8,

    'bishop1':balckbishop1,
    'bishop2':balckbishop2,

    'knight1':blackknight1,
    'knight2':blackknight2,

    'rook1':balckrook1,
    'rook2':balckrook2,

    'queen':blackqueen,
    'king':blackking
}

let whitePieces = {

    'pawn1':whitepawn1,
    'pawn2':whitepawn2,
    'pawn3':whitepawn3,
    'pawn4':whitepawn4,
    'pawn5':whitepawn5,
    'pawn6':whitepawn6,
    'pawn7':whitepawn7,
    'pawn8':whitepawn8,

    'bishop1':whitebishop1,
    'bishop2':whitebishop2,

    'knight1':whiteknight1,
    'knight2':whiteknight2,

    'rook1':whiterook1,
    'rook2':whiterook2,

    'queen':whitequeen,
    'king':whiteking
}

let boxState = {

    spaces :
        {
            11:blackPieces.bishop1,
            21:blackPieces.knight1,
            31:blackPieces.rook1,
            41:blackPieces.queen,
            51:blackPieces.king,
            61:blackPieces.rook2,
            71:blackPieces.knight2,
            81:blackPieces.bishop2,
            12:blackPieces.pawn1,
            22:blackPieces.pawn2,
            32:blackPieces.pawn3,
            42:blackPieces.pawn4,
            52:blackPieces.pawn5,
            62:blackPieces.pawn6,
            72:blackPieces.pawn7,
            82:blackPieces.pawn8,
            13:"",
            23:"",
            33:"",
            43:"",
            53:"",
            63:"",
            73:"",
            83:"",
            14:"",
            24:"",
            34:"",
            44:"",
            54:"",
            64:"",
            74:"",
            84:"",
            15:"",
            25:"",
            35:"",
            45:"",
            55:"",
            65:"",
            75:"",
            85:"",
            16:"",
            26:"",
            36:"",
            46:"",
            56:"",
            66:"",
            76:"",
            86:"",
            17:whitePieces.pawn1,
            27:whitePieces.pawn2,
            37:whitePieces.pawn3,
            47:whitePieces.pawn4,
            57:whitePieces.pawn5,
            67:whitePieces.pawn6,
            77:whitePieces.pawn7,
            87:whitePieces.pawn8,
            18:whitePieces.bishop1,
            28:whitePieces.knight1,
            38:whitePieces.rook1,
            48:whitePieces.queen,
            58:whitePieces.king,
            68:whitePieces.rook2,
            78:whitePieces.knight2,
            88:whitePieces.bishop2
    }
}

const reducer = (state = boxState,action)=>{
    return state;
}

const store = legacy_createStore(reducer);

export default store;