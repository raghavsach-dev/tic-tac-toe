import React, { useState } from "react";
import './App.css'
import Square from "./Square";

function App(){

  return <>
  <div id="mainboard" >
    <h1 className="heading">Tic Tac Toe</h1>
    <div className="board-row">
    <Square ind="1" />
    <Square ind="2" />
    <Square ind="3" /></div>
    <div className="board-row">
    <Square ind="4" />
    <Square ind="5" />
    <Square ind="6" /></div>
    <div className="board-row">
    <Square ind="7" />
    <Square ind="8" />
    <Square ind="9" /></div></div>
    <div id="winner"></div>
  </>
  
}


export default App;