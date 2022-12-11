import React from 'react'
import Square from '../component/Square'

export const Board = ({  board,
    isXnext,
    winner,
    gameOver,
    handleSquareClick,
    handleReset}) => {
  return (
    <div className="container">
     <div className="container-header">
       <ul>
         <li className="listXe">X</li>
         <li className="listOo">O</li>
       </ul>
       <div className="main-button"> { gameOver && !winner ? "TIES" : winner? "Winner :"+ winner : "TURN: " + (isXnext ?"X":"O")}</div>
      <button className="reset" onClick={handleReset}><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="none" stroke="#fff" stroke-width="2" d="M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9"/>
   </svg>
</button>
</div>
    <div className="board">{board.map((playerMark , idx) =>(
        <Square
          key={idx}
          squareId={idx}
          playerMark={playerMark}
          handleSquareClick={handleSquareClick}
        />
       
    ))}</div>
    </div>
  )
}

export default Board;
