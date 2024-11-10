import { useState } from "react"

import Header from "./components/Header/Header"
import GameBoard from "./components/Main/GameBoard"
import Player from "./components/Main/Player"

import "../src/index.css"

import logo from "../public/game-logo.png"

function App() {
  const [activePlayer, setActivePlayer] = useState("X")

  function handleSelectSquare(){
    setActivePlayer((curentPlayer)=>curentPlayer==="X"?"O":"X")
    return activePlayer
  }

  return (
    <> 
      <Header className="class_name" header_logo={logo}></Header>
      <section id="game-container">
        <ul id="players" className="highlight-player">
            <Player name="Your name 1" isActive={activePlayer==="X"} symbol="X"></Player>
            <Player name="Your name 2" isActive={activePlayer==="O"} symbol="O"></Player>
        </ul>
        <GameBoard handleSelect={handleSelectSquare} />
      </section>
      {/* Game output */}
      
    </>
  )
}

export default App
