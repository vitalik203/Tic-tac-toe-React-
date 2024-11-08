import React from 'react'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function GameBoard({handleSelect}) {
  const [square, setSquare] = React.useState(initialGameBoard)

  function handleClick(row, col){

    setSquare((previousBoard)=>{
      const curentSymbol = handleSelect()
      const updatedBoard = [...previousBoard.map((array)=>[...array])]
      updatedBoard[row][col] = `${curentSymbol}`
      return updatedBoard
    })
  }
  
  return (
    <ol id="game-board">
        {square.map((el, rowIndex)=>
        <li key={rowIndex}>
          <ol>
          {el.map((el, colIndex)=><li key={colIndex}><button onClick={() => handleClick(rowIndex, colIndex)}>{el}</button></li>)}
          </ol>
        </li>)}
    </ol>
  )
}
