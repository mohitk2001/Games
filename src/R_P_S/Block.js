import React from 'react'
import "./RPS.css"
function Block({image,title}) {

    
    
    return (
        <>
          <div  id="image_of_rps">
          <img src={image} alt="image" id="Img_style"/>  
          </div>
        </>
        
    )
}

export default Block
