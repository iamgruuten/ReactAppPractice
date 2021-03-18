import { createSlice } from "@reduxjs/toolkit"

const GameSlice = createSlice(
    {
        name: "gameFeatures",
        initialState:{
            xIsTurn: true,
            winner: "",
            stepNumber: 0,
            history: [{
                squares: Array(9).fill(null),
            }],
            current: {
                squares: Array(9).fill(null),
            }
        },
        reducers: {
            //Adding the actions within reducer
            turnNext: (state, action) =>{
                const history = state.history.slice(0, state.stepNumber + 1);
                const current = state.history[history.length - 1];
                const squares = current.squares.slice();

                const i = action.payload.index;
                console.log(action.payload)

                squares[i] = state.xIsTurn ? 'X' : 'O';
                state.history = state.history.concat([{squares: squares,}]);
                state.stepNumber = history.length;
                state.xIsTurn = !state.xIsTurn;
                state.current.squares = squares;

                if(calculateWinner(squares)){
                    state.winner = state.xIsTurn ? 'X' : 'O';
                }
            },
            timeTravel: (state, action) => {
                
            }
        }
    }
)

export const { turnNext, aWinner } = GameSlice.actions;
export default GameSlice.reducer; 

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }