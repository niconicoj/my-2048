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
  switch (action.type) {
    case 'MOVE_UP': 
      return state

    case 'MOVE_DOWN':
      return state

    case 'MOVE_LEFT':
        let newState = process(state.tiles, state.score)
        return newState

    case 'MOVE_RIGHT':
      return state

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