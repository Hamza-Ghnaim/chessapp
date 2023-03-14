import { createStore } from "redux";

let blackPieces = {

    'pawn1':{},
    'pawn2':{},
    'pawn3':{},
    'pawn4':{},
    'pawn5':{},
    'pawn6':{},
    'pawn7':{},
    'pawn8':{},

    'bishop1':{},
    'bishop2':{},

    'knight1':{},
    'knight2':{},

    'rook1':{},
    'rook2':{},

    'queen':{},
    'king':{},
}

let whitePieces = {

    'pawn1':{},
    'pawn2':{},
    'pawn3':{},
    'pawn4':{},
    'pawn5':{},
    'pawn6':{},
    'pawn7':{},
    'pawn8':{},

    'bishop1':{},
    'bishop2':{},

    'knight1':{},
    'knight2':{},

    'rook1':{},
    'rook2':{},

    'queen':{},
    'king':{},
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