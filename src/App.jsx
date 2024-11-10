import { useState } from "react"

import Header from "./components/Header/Header"
import GameBoard from "./components/Main/GameBoard"
import Player from "./components/Main/Player"
import OutputGame from "./components/Main/OutputGame"

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
        <GameBoard clickEvent={handleClick} squareLook={square}/>
      </section>
      <OutputGame datas={log} />
  </>
  )
}

export default App
