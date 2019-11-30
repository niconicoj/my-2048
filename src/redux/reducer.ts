import _ from 'lodash'

interface TilesState {
  tiles: number[][]
  score: number
}

type TilesAction = 
{ type: 'MOVE_UP' }
| { type: 'MOVE_DOWN' }
| { type: 'MOVE_LEFT' }
| { type: 'MOVE_RIGHT' }

export function tileReducer(state: TilesState, action: TilesAction): TilesState {
  let newState = undefined
  switch (action.type) {
    case 'MOVE_UP': 
      newState = process(transpose(state.tiles), state.score)
      return { tiles: transpose(newState.tiles), score : newState.score }

    case 'MOVE_DOWN':
      newState = process(reverseAll(transpose(state.tiles)), state.score)
      return { tiles: transpose(reverseAll(newState.tiles)), score : newState.score }

    case 'MOVE_LEFT':
        newState = process(state.tiles, state.score)
        return newState

    case 'MOVE_RIGHT':
        newState = process(reverseAll(state.tiles), state.score)
        return { tiles: reverseAll(newState.tiles), score : newState.score }

    default:
      return state
  }
}

const process = (tiles: number[][], score: number) => {
  const initTiles = [...tiles]
  for( let i = 0; i < tiles.length; i++){
    let el = mergeRowCells(tiles[i])
    tiles.splice(i,1, el.row)
    score += el.score
  }
  //hack to compare init and modified array
  if(JSON.stringify(tiles) === JSON.stringify(initTiles)){
    return {tiles: tiles, score: score}
  } else {
    tiles = spawnTile(tiles)
    return {tiles: tiles, score: score}
  }
}

const mergeRowCells = (row: Array<number>) => {
  let filteredRow = row.filter(value => value !== 0)
  let score = 0
  for(let i = 0; i < filteredRow.length; i++){
    if(filteredRow[i] === filteredRow[i+1]){
      let val = filteredRow[i]
      filteredRow.splice(i, 1, val*2)
      filteredRow.splice(i+1,1)
      score += val*2
    }
  }
  while(filteredRow.length < 4) filteredRow.push(0)
  return {row: filteredRow, score: score}
}

const reverseAll = (tiles: number[][]) => {
  return tiles.map((row) => row.reverse())
}

const transpose = (tiles: number[][]) => {
  return tiles[0].map((col, i) => tiles.map(row => row[i]));
}

export const spawnTile = (tiles: number[][]) => {
  let tile = {
    x: _.random(0,3),
    y: _.random(0,3),
    value: _.random(0,1,true) > 0.1 ? 2 : 4
  }
  while(tiles[tile.y][tile.x] !== 0){
    tile.x = _.random(0,3)
    tile.y = _.random(0,3)
  }
  tiles[tile.y][tile.x] = tile.value
  return tiles
}