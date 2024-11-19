export default function GameOwer({win}) {
  return (
    <div id="game-over">
        <h2>Game Ower!</h2>
        {win!==null?<p>You are winner, {win}!</p>:<p>Draw!</p>}
        <p><button>Rematch!</button></p>
    </div>
  )
}
