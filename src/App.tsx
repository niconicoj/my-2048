import React from 'react'
import { connect } from 'react-redux'
import Tile from './components/Tile'

import './App.css'

interface IProps {
}

interface IState {
  gameArray: Array<Array<number>>
  score: number
  lost: boolean
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      gameArray: this.init(),
      score: 0,
      lost: false
    }
  }

  init = () => {
    return [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">My 2048</h1>
        </header>
        <div className="box-container">
          {
            this.state.gameArray.map((row, i) => (
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
    );
  }
}

export default App;
