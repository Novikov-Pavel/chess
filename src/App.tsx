import { useEffect, useState } from 'react'
import './App.scss'
import BoardComponent from './component/BoardComponent'
import { Board } from './models/Board'
import { Player } from './models/Player'
import { Colors } from './models/Colors'
import LostFigures from './component/LostFigures'
import Timer from './component/Timer'

const App = () => {
  const [board, setBoard] = useState(new Board)
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer)
  }, [])

  function restart() {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
    <div className='app'>
      <Timer
        currentPlayer={currentPlayer}
        restart={restart}
      />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures title={'Чёрные фигуры'} figures={board.lostBlackFigures} />
        <LostFigures title={'Белые фигуры'} figures={board.lostWhiteFigures} />
      </div>
    </div>
  )
}

export default App