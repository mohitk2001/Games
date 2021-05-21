import React from 'react'
import {Link} from "react-router-dom"
function Cards({name,add,msg,url}) {
    const Style={
        width:"100%",
        height:"55%"
    }
    const cardStyle={
        height:'430px',
        width:"100%",
        background:"linear-gradient(to right,rgb(71, 209, 209),white)"
    }
    return (
        <div className="card" style={cardStyle}>
            <img className="card-img-top" src={add} alt="Card image" style={Style}/>
                <div className="card-body text-center">
                    <h4 className="card-title ">{name}</h4>
                    <p className="card-text ">{msg}</p>
                    <Link to={`/${url}`} className="btn btn-primary ">Wanna Play</Link>
                </div>
        </div>
    )
}

export default Cards
