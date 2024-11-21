import {useState} from 'react'

export default function Player({name, symbol, isActive, handlePlayers}) {
    const [ isEditing, setIsEditing ] = useState(false)
    const [ playerName, setPlayerName ] = useState(name)

    function handleClick(){
        setIsEditing((editingState)=>{
            return !editingState
        })
        handlePlayers(symbol, playerName)
    }

    function handleChange(val){
        setPlayerName(val.target.value)
    }

    let playerInfo = <span className="player-name">{playerName}</span>

    if(isEditing){
        playerInfo = <input required className='player input' placeholder='Player name' value={playerName} onChange={handleChange}></input>
    }

    return (
        <li className={isActive?"active player":"player"}>
            {playerInfo}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleClick}>{isEditing?"Save":"Edit"}</button>
        </li>
    )
}
