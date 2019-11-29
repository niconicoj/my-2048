import { action } from 'typesafe-actions';

import { MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT } from "../shared/constants"

export const moveUp = () => action(MOVE_UP)
export const moveDown = () => action(MOVE_DOWN)
export const moveLeft = () => action(MOVE_LEFT)
export const moveRight = () => action(MOVE_RIGHT)

