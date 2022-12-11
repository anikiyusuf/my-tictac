import React from 'react'

export const Square = ({playerMark , squareId , handleSquareClick}) => {
  return (
    <div className="square" onClick={() => handleSquareClick(squareId)}>
        {playerMark}
    </div>
  )
}

export  default Square;

