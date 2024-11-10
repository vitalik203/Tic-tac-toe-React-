

export default function GameBoard({clickEvent, squareLook}) {
  
  return (
    <ol id="game-board">
        {squareLook.map((el, rowIndex)=>
        <li key={rowIndex}>
          <ol>
          {el.map((el, colIndex)=><li key={colIndex}><button onClick={() => clickEvent(rowIndex, colIndex)}>{el}</button></li>)}
          </ol>
        </li>)}
    </ol>
  )
}
