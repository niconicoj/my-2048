import React from 'react'
import Tile from './components/Tile'

import { tileReducer, spawnTile } from './redux/reducer'
import './App.css'

let tiles = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

tiles = spawnTile(tiles)
tiles = spawnTile(tiles)

const initialState = {
  tiles: tiles,
  score: 0
}

function App() {
  const [state, dispatch] = React.useReducer(tileReducer, {
    tiles: initialState.tiles,
    score: initialState.score
  });
  function checkKey(e: KeyboardEvent) {
      if (e.keyCode === 38) {
        console.log('up')
        dispatch({ type: 'MOVE_UP' })
      }
      else if (e.keyCode === 40) {
        console.log('down')
        dispatch({ type: 'MOVE_DOWN' })
      }
      else if (e.keyCode === 37) {
        console.log('left')
        dispatch({ type: 'MOVE_LEFT' })
      }
      else if (e.keyCode === 39) {
        console.log('right')
        dispatch({ type: 'MOVE_RIGHT' })
      }
  }

  document.onkeydown = checkKey

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">My 2048</h1>
      </header>
      <div className="box-container">
        {
          state.tiles.map((row, i) => (
            <div key={i} className="box-row">
            {
              row.map((cell, y) => (
                <Tile key={y} number={cell}/>
              ))
            } 
            </div>
          ))
        }
      </div>
      <div className="score">score : {state.score}</div>
    </div>
  )
}

export default App
