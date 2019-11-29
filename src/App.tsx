import React from 'react'
import Tile from './components/Tile'

import { tileReducer } from './redux/reducer'
import './App.css'

const initialState = {
  tiles: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
}

function App() {
  const [state, dispatch] = React.useReducer(tileReducer, {
    tiles: initialState.tiles,
  });
  function checkKey(e: KeyboardEvent) {
      if (e.keyCode === 38) {
        console.log('up')
      }
      else if (e.keyCode === 40) {
        console.log('down')
      }
      else if (e.keyCode === 37) {
        console.log('left')
      }
      else if (e.keyCode === 39) {
        console.log('right')
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
    </div>
  )
}

export default App
