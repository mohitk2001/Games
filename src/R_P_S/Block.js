import React from 'react'
import "./RPS.css"
function Block({image,title,ONClick}) {

    
    
    return (
        <>
          <div id="image_of_rps" onClick={()=>ONClick(title)}>
          <img src={image} alt="image" id="Img_style"/> 
          <h1 className="text-center">{title}</h1>
          </div>
        </>
        
    )
}

export default Block
