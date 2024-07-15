import React from "react";
import './App.css'

function Reset(props){

    function handleClick(){
        location.reload()
    }

    return <div className="windiv">
        <h1 className="announce">The Winner is {props.winner}</h1>
        <button className="rstbtn" onClick={handleClick} >Reset Game</button>
    </div>
}

export default Reset;