import React,{useState,useEffect} from 'react'
import Square from "./Square"
import "../App.css";
import {Pattern} from "./Pattern"
function Box() {
    let init=["","","","","","","","",""]
    const [board, setBoard] = useState(init)
    const [player,setPlayer]=useState("X");
    const [result, setResult] = useState({winner:'none',state:"none"})
    useEffect(() => {
        
        checkWin();
        checIftie();      
        if(player==='X'){
            setPlayer("O")
        }
        else
        setPlayer("X")     
    }, [board])


    useEffect(() => {
       
        if((result.state!=="none") && (result.winner!=="none")){
           
            alert(`Game finished ${result.winner} ${result.state}`)

            GameRestart()
        }    
    }, [result])
    
    const setValue=(index)=>{
       
        setBoard(
            board.map((currVal,ind)=>{
                if(index===ind && currVal===""){                
                    return player   
                }
                return currVal
            }) 
        )
        
        
    }
    
    const checkWin=()=>{
        Pattern.forEach((currentPattern)=>{
            const firstPlayer=board[currentPattern[0]];
            let foundWinning=true;
            if(firstPlayer==="")
            return
            else{
                currentPattern.forEach((index)=>{
                    if(board[index]!==firstPlayer){
                        foundWinning=false;
                        
                        
                    }
                    
                });
                //console.log(foundWinning)
                if(foundWinning){    
                    setResult({winner:"player "+player,state:"won"})
                    console.log(result)
                }

            }
           
        })
       
    }

    const checIftie=()=>{
        let filled=true;
        board.forEach((square)=>{
            if(square===""){
               filled=false
            }
        })
        if(filled){
            setResult({winner:"no-one won its",state:"draw"})
        }
    }

    const GameRestart=()=>{
        setBoard(init);
        setResult({winner:'none',state:"none"})
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
