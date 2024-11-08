import React from 'react'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]

export default function GameBoard() {
  return (
    <ol id="game-board">
        {initialGameBoard.map((el, i)=>{
            <li key={el}>
                {el.map((el, i)=>{
                <li key={el}>
                    <button>{el}</button>
                </li>
            })}
            </li>
        })}
    </ol>
  )
}
