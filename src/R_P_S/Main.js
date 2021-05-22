import React from 'react'
import Block from "./Block"
import Paper from "./Images/Paper.png"
import Rock from "./Images/Rock.png"
import Sci from "./Images/Sci.png"
import "./RPS.css"
function Main() {

    
    return (
        <>
        <div className="container-fluid" id="Main">
        <h1 className="text-center m-4">Lets Play Rock Paper Scissor</h1>
        <div className="container" id="player">
        <Block image={Paper}/>
        <Block image={Sci}/>
        <Block image={Rock}/>
        </div>
        
        </div>
        
        
        </>
    )
}

export default Main
