import React, { useEffect, useState } from 'react'
import './App.scss'
import BoardComponent from './component/BoardComponent'
import { Board } from './models/Board'

const App = () => {
  const [board, setBoard] = useState(new Board)
  
  function restart() {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  useEffect(() => restart(), [])

  return (
    <div className='app'>
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  )
}

export default App