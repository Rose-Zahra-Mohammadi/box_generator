import React, {useState} from 'react'
import ColorForm from '../components/ColorForm'
import ColorDisplay from '../components/ColorDisplay'

const ColorBoard = () => {
  const[boxArray,setBoxArray] = useState([])

const recieveNewBox = (newBox) => {
    setBoxArray([...boxArray, newBox])
  }
  return (
    <div>
      <ColorForm onNewBox = {recieveNewBox}/>
      <ColorDisplay boxArray = {boxArray}/>
    </div>
  );
}

export default ColorBoard;