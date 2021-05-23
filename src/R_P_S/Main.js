import React from 'react'
import Block from "./Block"
import Paper from "./Images/Paper.png"
import Rock from "./Images/Rock.png"
import Sci from "./Images/Sci.png"
import "./RPS.css"
function Main() {
   const selectOne=(e)=>{
       console.log("clicked",e)
   }
    
    return (
        <>
        <div className="container-fluid" id="Main">
        <h1 className="text-center m-4">Lets Play Rock Paper Scissor</h1>
        <div style={{display:"block"}}>
        <div className="container" id="player">
        <Block image={Paper} title={"Paper"}  ONClick={selectOne}/>
        <Block image={Sci} title={"Scissor"} ONClick={selectOne}/>
        <Block image={Rock}title={"Rock"} ONClick={selectOne}/>
        </div>
        </div>
       
        
        </div>
        
        
        </>
    )
}

export default Main
