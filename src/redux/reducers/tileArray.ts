import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as actions from '../actions';
import { MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT } from "../../shared/constants"

export type TileArrayAction = ActionType<typeof actions>

export type TileArrayState = {
  readonly tiles: number[][]|undefined
}

const initialState: TileArrayState = {
  tiles: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
};

export default combineReducers<TileArrayState, TileArrayAction>({
  tiles: (state = initialState.tiles, action) => {
    switch (action.type) {
      case MOVE_UP: {
        //TODO: implement mechanic
        break;
      }
      case MOVE_DOWN: {
        //TODO: implement mechanic
        break; 
      }
      case MOVE_LEFT: {
        //TODO: implement mechanic
        break; 
      }
      case MOVE_RIGHT: {
        //TODO: implement mechanic 
        break; 
      }
      default: {
        return state
      }
    }
  }
})

