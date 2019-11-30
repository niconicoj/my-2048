import React, { FunctionComponent } from 'react'; // importing FunctionComponent

type CardProps = {
  number: number
}

const hueArray = [  
  "#DC4E6F",
  "#B84F88",
  "#895591",
  "#5C5689",
  "#224272",
  "#0E3C59",
  "#B77E4E",
  "#91555D",
  "#895682",
  "#522272",
  "#2B0E59",
  "#4EB798",
  "#61912B",
  "#96654C",
  "#72222E",
  "#590E29",
]

const Tile: FunctionComponent<CardProps> = ({ number }) => {
  let background = "#424855"
  if(number !== 0) {
    let modulo = Math.log2(number)%hueArray.length
    background = hueArray[modulo]
  }

  return <div className="box" style={{background: background}}>{number ? number : ''}</div>
}

export default Tile
