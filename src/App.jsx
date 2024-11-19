import { useState } from "react"

import Header from "./components/Header/Header"
import GameBoard from "./components/Main/GameBoard"
import GameOver from "./components/Main/GameOwer"

import Player from "./components/Main/Player"
import OutputGame from "./components/Main/OutputGame"
import { WINNING_COMBINATIONS } from "./components/Main/winning_combination"

import "../src/index.css"

import logo from "../public/game-logo.png"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]


function App() {
  const [activePlayer, setActivePlayer] = useState("X")
  const [square, setSquare] = useState(initialGameBoard)
  const [log, setLog] = useState([])

  let winner
  
  WINNING_COMBINATIONS.forEach(combination=>{
    const firstValue = square[combination[0].row][combination[0].column]
    const secondValue = square[combination[1].row][combination[1].column]
    const thirdValue = square[combination[2].row][combination[2].column]
    
    if(firstValue && firstValue===secondValue && firstValue===thirdValue){
      winner = firstValue
      console.log(winner)
    }
    if(log.length === 9 && !winner){
      winner=null
    }
  })
  
  

  function handleSelectSquare(){
    setActivePlayer((curentPlayer)=>curentPlayer==="X"?"O":"X")
    return activePlayer
  }

  function handleClick(row, col){
    
    const curentSymbol = handleSelectSquare()
    setSquare((previousBoard)=>{
      const updatedBoard = [...previousBoard.map((array)=>[...array])]
      updatedBoard[row][col] = `${curentSymbol}`
      return updatedBoard
    })
    setLog(curentLog=>{
      const newLog = [ {player: curentSymbol, position: {rowIndex: row, colIndex: col}}, ...curentLog]
      console.log(newLog);
      
      return newLog
    })
  }


  return (
    <> 
      <Header className="class_name" header_logo={logo}></Header>
      <section id="game-container">
        <ul id="players" className="highlight-player">
            <Player name="Your name 1" isActive={activePlayer==="X"} symbol="X"></Player>
            <Player name="Your name 2" isActive={activePlayer==="O"} symbol="O"></Player>
        </ul>
        {winner && <GameOver win={winner} />}
        <GameBoard clickEvent={handleClick} squareLook={square}/>
      </section>
      <OutputGame datas={log} />
  </>
  )
}

export default App
