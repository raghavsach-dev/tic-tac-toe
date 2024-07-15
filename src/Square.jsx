import React, { useState } from "react";
import './App.css'
import Reset from "./Reset";
import * as ReactDOM from 'react-dom';


var squaresX = false;
let winnerdict = {};
function declareWinner(winner){
    const div=document.getElementById("mainboard")
    console.log(div);
    div.style.display = "none"
    ReactDOM.render(<Reset winner={winner} />, document.getElementById('winner'));
    
}



function checkWinner() {
    console.log(Object.keys(winnerdict).length)
    if (winnerdict[1] === "X" && winnerdict[2] === "X" && winnerdict[3] === "X") {
        declareWinner("X")      
    } else if (winnerdict[4] === "X" && winnerdict[5] === "X" && winnerdict[6] === "X") {
        declareWinner("X")
    } else if (winnerdict[7] === "X" && winnerdict[8] === "X" && winnerdict[9] === "X") {
        declareWinner("X")
    } else if (winnerdict[1] === "X" && winnerdict[4] === "X" && winnerdict[7] === "X") {
        declareWinner("X") 
    } else if (winnerdict[2] === "X" && winnerdict[5] === "X" && winnerdict[8] === "X") {
        declareWinner("X")
    } else if (winnerdict[3] === "X" && winnerdict[6] === "X" && winnerdict[9] === "X") {
        declareWinner("X")
    } else if (winnerdict[1] === "X" && winnerdict[5] === "X" && winnerdict[9] === "X") {
        declareWinner("X")
    } else if (winnerdict[3] === "X" && winnerdict[5] === "X" && winnerdict[7] === "X") {
        declareWinner("X")
    } else if (winnerdict[1] === "O" && winnerdict[2] === "O" && winnerdict[3] === "O") {
        declareWinner("O")
    } else if (winnerdict[4] === "O" && winnerdict[5] === "O" && winnerdict[6] === "O") {
        declareWinner("O") 
    } else if (winnerdict[7] === "O" && winnerdict[8] === "O" && winnerdict[9] === "O") {
        declareWinner("O")
    } else if (winnerdict[1] === "O" && winnerdict[4] === "O" && winnerdict[7] === "O") {
        declareWinner("O")
    } else if (winnerdict[2] === "O" && winnerdict[5] === "O" && winnerdict[8] === "O") {
        declareWinner("O") 
    } else if (winnerdict[3] === "O" && winnerdict[6] === "O" && winnerdict[9] === "O") {
        declareWinner("O")
    } else if (winnerdict[1] === "O" && winnerdict[5] === "O" && winnerdict[9] === "O") {
        declareWinner("O")
    } else if (winnerdict[3] === "O" && winnerdict[5] === "O" && winnerdict[7] === "O") {
        declareWinner("O")
    } else if (Object.keys(winnerdict).length===9){
        declareWinner("None")
    }
}




function Square({ ind }) {

    const [squares, setsquares] = useState("");
        
    function handleClick(event) {


        if (squaresX === false) {
            setsquares("X");
            squaresX = true;
            const buttonID = event.target.id;
            winnerdict[buttonID] = "X";
            console.log(winnerdict);
            checkWinner();
        } else if (squaresX === true) {
            setsquares("O");
            squaresX = false;
            const buttonID = event.target.id;
            winnerdict[buttonID] = "O";
            console.log(winnerdict);
            checkWinner();
        }

    }


    
    return <button id={ind} onClick={handleClick} disabled={Boolean(squares)} className="square">{squares}</button>;
}

export default Square;
