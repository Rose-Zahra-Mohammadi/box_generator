import React from 'react'

const ColorDisplay = (props) => {
  return (
    <div style={{display:"flex", flexwrap: "wrap", justifyContent: 'center'}}>
      {props.boxArray.map((box, i) => <div className="box" key={i} style={{backgroundColor: box.color, height: box.size + "px", width: box.size + "px"}}></div>)}
    </div>
  )
}

export default ColorDisplay;