import React from 'react'

function Square({setValue,board_val}) {
    return (
        <>
        <div className="col-4 C" onClick={setValue} >
           <h4>{board_val}</h4>
        </div>
        </>
    )
}

export default Square
