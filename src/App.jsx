import Header from "./components/Header/Header"
import Main from "./components/Main/Main"

import logo from "../public/game-logo.png"

function App() {
  return (
    <> 
      <Header className="class_name" header_logo={logo}></Header>
      <Main></Main>
    </>
  )
}

export default App
