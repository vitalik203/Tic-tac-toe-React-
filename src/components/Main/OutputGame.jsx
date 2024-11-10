export default function OutputGame({datas}) {
  return (
    <ol id="log">
        {datas.map((el, i) => (<li key={`#${i}`}>Player {el.player} turns Col - {el.position.colIndex} and Row - {el.position.rowIndex}</li>))}
    </ol>
  )
}
