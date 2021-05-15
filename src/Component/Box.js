import React,{useState,useEffect} from 'react'
import Square from "./Square"
import "../App.css";
import {Pattern} from "./Pattern"
function Box() {
    let init=["","","","","","","","",""]
    const [board, setBoard] = useState(init)
    const [player,setPlayer]=useState("X");

    console.log(Pattern)

    const setValue=(index)=>{
       
        setBoard(
            board.map((currVal,ind)=>{
                if(index===ind && currVal===""){                
                    return player   
                }
                return currVal
            }) 
        )
        
        if(player==='X'){
            setPlayer("O")
        }
        else
        setPlayer("X")
    }

    return (
       <>
        <div className="container mt-5" >
            <div className="container-fluid m-auto " id="box">
                <div className="row R">
                    <Square board_val={board[0]} setValue={()=>{setValue(0);}}/>
                    <Square board_val={board[1]} setValue={()=>{setValue(1);}}/>
                    <Square board_val={board[2]} setValue={()=>{setValue(2);}}/>
                </div>
                <div className="row R">
                    <Square board_val={board[3]} setValue={()=>{setValue(3);}}/>
                    <Square board_val={board[4]} setValue={()=>{setValue(4);}}/>
                    <Square board_val={board[5]} setValue={()=>{setValue(5);}}/>
                </div>
                <div className="row R">
                    <Square board_val={board[6]} setValue={()=>{setValue(6);}}/>
                    <Square board_val={board[7]} setValue={()=>{setValue(7);}}/>
                    <Square board_val={board[8]} setValue={()=>{setValue(8);}}/>
                </div>
            </div>
        </div>
       </>
    )
}

export default Box
