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

import { createStore } from "redux";

let blackPieces = {

    'pawn1':{"image":blackpawn1},
    'pawn2':{"image":blackpawn2},
    'pawn3':{"image":blackpawn3},
    'pawn4':{"image":blackpawn4},
    'pawn5':{"image":blackpawn5},
    'pawn6':{"image":blackpawn6},
    'pawn7':{"image":blackpawn7},
    'pawn8':{"image":blackpawn8},

    'bishop1':{"image":balckbishop1},
    'bishop2':{"image":balckbishop2},

    'knight1':{"image":blackknight1},
    'knight2':{"image":blackknight2},

    'rook1':{"image":balckrook1},
    'rook2':{"image":balckrook2},

    'queen':{"image":blackqueen},
    'king':{"image":blackking},
}

let whitePieces = {

    'pawn1':{'image':whitepawn1},
    'pawn2':{'image':whitepawn2},
    'pawn3':{'image':whitepawn3},
    'pawn4':{'image':whitepawn4},
    'pawn5':{'image':whitepawn5},
    'pawn6':{'image':whitepawn6},
    'pawn7':{'image':whitepawn7},
    'pawn8':{'image':whitepawn8},

    'bishop1':{'image':whitebishop1},
    'bishop2':{'image':whitebishop2},

    'knight1':{'image':whiteknight1},
    'knight2':{'image':whiteknight2},

    'rook1':{'image':whiterook1},
    'rook2':{'image':whiterook2},

    'queen':{'image':whitequeen},
    'king':{'image':whiteking},
}

let boxState = {
    '11':{'chessPiece':blackPieces.bishop1},
    '21':{'chessPiece':blackPieces.knight1},
    '31':{'chessPiece':blackPieces.rook1},
    '41':{'chessPiece':blackPieces.queen},
    '51':{'chessPiece':blackPieces.king},
    '61':{'chessPiece':blackPieces.rook2},
    '71':{'chessPiece':blackPieces.knight2},
    '81':{'chessPiece':blackPieces.bishop2},
    '12':{'chessPiece':blackPieces.pawn1},
    '22':{'chessPiece':blackPieces.pawn2},
    '32':{'chessPiece':blackPieces.pawn3},
    '42':{'chessPiece':blackPieces.pawn4},
    '52':{'chessPiece':blackPieces.pawn5},
    '62':{'chessPiece':blackPieces.pawn6},
    '72':{'chessPiece':blackPieces.pawn7},
    '82':{'chessPiece':blackPieces.pawn8},
    '13':{},
    '23':{},
    '33':{},
    '43':{},
    '53':{},
    '63':{},
    '73':{},
    '83':{},
    '14':{},
    '24':{},
    '34':{},
    '44':{},
    '54':{},
    '64':{},
    '74':{},
    '84':{},
    '15':{},
    '25':{},
    '35':{},
    '45':{},
    '55':{},
    '65':{},
    '75':{},
    '85':{},
    '16':{},
    '26':{},
    '36':{},
    '46':{},
    '56':{},
    '66':{},
    '76':{},
    '86':{},
    '17':{'chessPiece':whitePieces.pawn1},
    '27':{'chessPiece':whitePieces.pawn2},
    '37':{'chessPiece':whitePieces.pawn3},
    '47':{'chessPiece':whitePieces.pawn4},
    '57':{'chessPiece':whitePieces.pawn5},
    '67':{'chessPiece':whitePieces.pawn6},
    '77':{'chessPiece':whitePieces.pawn7},
    '87':{'chessPiece':whitePieces.pawn8},
    '18':{'chessPiece':whitePieces.bishop1},
    '28':{'chessPiece':whitePieces.knight1},
    '38':{'chessPiece':whitePieces.rook1},
    '48':{'chessPiece':whitePieces.queen},
    '58':{'chessPiece':whitePieces.king},
    '68':{'chessPiece':whitePieces.rook2},
    '78':{'chessPiece':whitePieces.knight2},
    '88':{'chessPiece':whitePieces.bishop2},
}

const reducer = (state = boxState,action)=>{

}

const store = createStore(reducer);