export default function GameOwer({win, handleRematch}) {
  return (
    <div id="game-over">
        <h2>Game Ower!</h2>
        {win!=="draw"&& <p>You are winner, {win}!</p>}
        {win==="draw"&& <p>Draw Game!</p>}
        <p><button onClick={handleRematch}>Rematch!</button></p>
    </div>
  )
}
