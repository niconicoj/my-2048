import React from 'react'
import _ from 'lodash'
import './App.css'

interface IProps {
}

interface IState {
  gameArray: Array<Array<number>>
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      gameArray: this.init()
    }

    document.onkeydown = this.handleKeyPress
  }

  init = () => {
    let gameArray = [[2,0,4,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
    let cell1 = [_.random(0,3),_.random(0,3)]
    let cell2 = cell1
    while(cell1 === cell2){
      cell2 = [_.random(0,3),_.random(0,3)]
    }
    if(_.random(0,1,true) > 0.1){
      gameArray[cell1[0]][cell1[1]] = 2
    } else {
      gameArray[cell1[0]][cell1[1]] = 4
    }
    if(_.random(0,1,true) > 0.1){
      gameArray[cell2[0]][cell2[1]] = 2
    } else {
      gameArray[cell2[0]][cell2[1]] = 4
    }
    return gameArray
  }

  handleKeyPress = (e: KeyboardEvent) => {
    let gameArray = this.state.gameArray
    switch (e.keyCode) {
      case 37:
        for( let i = 0; i < gameArray.length; i++){
          gameArray.splice(i,1, this.mergeRowCells(gameArray[i]))
        }
        break;
      case 38:

        break;
      case 39:
        for( let i = 0; i < gameArray.length; i++){
          gameArray.splice(i,1, this.mergeRowCells(gameArray[i].reverse()).reverse())
        }
        break;
      case 40:

        break;
    
      default:
        break;
    }
    console.log(gameArray)
    this.setState({
      gameArray: gameArray
    })
  }

  mergeRowCells = (row: Array<number>) => {
    let filteredRow = row.filter(value => value !== 0)
    for(let i = 0; i < filteredRow.length; i++){
      if(filteredRow[i] === filteredRow[i+1]){
        let val = filteredRow[i]
        filteredRow.shift()
        filteredRow.splice(i, 1, val*2)
      }
    }
    while(filteredRow.length < 4) filteredRow.push(0)
    return filteredRow
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
                  <div key={y} className="box">{cell ? cell : ''}</div>
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
