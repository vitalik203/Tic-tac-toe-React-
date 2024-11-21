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
  const [players, setPlayers] = useState({
    X:"Player-1",
    O:"Player-2"
  })
  let winner
  
  function handleRematch(){
    setSquare(initialGameBoard)
    setLog([])
    setActivePlayer("X")
  }

  WINNING_COMBINATIONS.forEach(combination=>{
    const firstValue = square[combination[0].row][combination[0].column]
    const secondValue = square[combination[1].row][combination[1].column]
    const thirdValue = square[combination[2].row][combination[2].column]
    
    if(firstValue && firstValue===secondValue && firstValue===thirdValue){
      winner = players[firstValue]
    }
  })
  
  if(!winner && log.length===9){
    winner = "draw"
  }
  

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

  function handlePlayersName(symbol, name){
    setPlayers(prevPlayer=>{
      return {...prevPlayer, [symbol]: name}
    })
  }


  return (
    <> 
      <Header className="class_name" header_logo={logo}></Header>
      <section id="game-container">
        <ul id="players" className="highlight-player">
            <Player handlePlayers={handlePlayersName} name={players.X} isActive={activePlayer==="X"} symbol="X"></Player>
            <Player handlePlayers={handlePlayersName} name={players.O} isActive={activePlayer==="O"} symbol="O"></Player>
        </ul>
        {winner && <GameOver handleRematch={handleRematch} win={winner}/>}
        <GameBoard clickEvent={handleClick} squareLook={square}/>
      </section>
      <OutputGame datas={log} />
  </>
  )
}

export default App
