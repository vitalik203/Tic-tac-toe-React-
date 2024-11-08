import React from 'react'
import GameBoard from './GameBoard'
import Player from './Player'

export default function Main() {
  return (
    <section id="game-container">
        <ul id="players">
            <Player name="Your name 1" symbol="X"></Player>
            <Player name="Your name 2" symbol="O"></Player>
        </ul>
        <GameBoard />
    </section>
  )
}
