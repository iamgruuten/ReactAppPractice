import React from 'react';
import Board from './Board'
import { useSelector, useDispatch } from 'react-redux'
import { aWinner, turnNext } from './store/feature/Game'

export const Game = () => {
  const dispatch = useDispatch()
  const board = useSelector(state => state.gameFeatures) //Gets the game state
  console.log(board)

  //This state will be changed to time travel
  const jumptTo = (step) => {
    board.stepNumber = step
    board.xIsTurn = (step % 2) === 0
  }

  const moves = board.history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
          return(<li key={move}><button onClick={() => jumptTo(step)}>{desc}</button></li>)
  });

  let status;

  if(board.winner !== ""){
      status = "Winner: " + board.winner ;
      dispatch(aWinner)
  }else{
      status = "Next player: " + (board.xIsTurn ? 'X' : 'O')
  }

  return (
    <div className="game">
      <div className="game-board">
        {console.log(board.current.squares)}
        <Board squares={ board.current.squares } onClick={(i) => dispatch(turnNext({index:i}))}/>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
    
  }