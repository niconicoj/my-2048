interface TilesState {
  tiles: number[][]
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
      break;
    case 'MOVE_DOWN':
      return state
      break;
    case 'MOVE_LEFT':
      return state
      break;
    case 'MOVE_RIGHT':
      return state
      break;
    default:
      return state
  }
}