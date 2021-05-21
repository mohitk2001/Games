import React from 'react'
import Cards from "./Home_Co/Cards"
function Home() {
    return (
        <>
            <div className="container-fluid">
               <h1 className="text-center m-5">Welcome to Game Zone 🥇</h1>
               <div className="container">
               <div className="row">
                    <div className="col-sm-4 my-1">
                    <Cards name={"Tic Tac Toe"} 
                    add={"https://image.freepik.com/free-vector/tic-tac-toe-game_97886-854.jpg"}
                    msg={"You played this in your childhood on paper using pencil/paper "}
                    url={'tic-tac-toe'}
                    />
                    </div>
                    <div className="col-sm-4 my-1">
                    <Cards name={"Rock Paper Scissor"} 
                    add={"https://static.vecteezy.com/ti/gratis-vektor/p3/690792-stein-papier-schere-hand-symbole-kostenlos-vektor.jpg"}
                    msg={"Rock paper scissors is a hand game usually played between two player"}
                    url={'rock-paper-sc'}
                    />
                    </div>
                    <div className="col-sm-4 my-1">
                    <Cards name={"Tic Tac Toe"} 
                    add={"https://image.freepik.com/free-vector/tic-tac-toe-game_97886-854.jpg"}
                    msg={"You played this in your childhood on paper using pencil/paper "}
                    url={'tic-tac-toe'}
                    />
                    </div>
                </div>
               </div>
            </div>
        </>
    )
}

export default Home
