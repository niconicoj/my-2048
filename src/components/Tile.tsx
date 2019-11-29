import React, { FunctionComponent } from 'react'; // importing FunctionComponent

type CardProps = {
  number: number
}

const Tile: FunctionComponent<CardProps> = ({ number }) => <div className="box">{number ? number : ''}</div>

export default Tile
