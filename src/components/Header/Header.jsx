import React from 'react'

export default function Header({class_name, header_logo}) {
  return (
    <header className={class_name}>
      <img src={header_logo}></img>
        <h1>React Tic-Tac-Toe</h1>
    </header>
  )
}
