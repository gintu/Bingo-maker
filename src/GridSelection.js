import React from 'react'

export default function GridSelection(props) {
    return (
        <div>
            <h1>select the grid size</h1>

<select value = {props.gridSize} onChange={props.handle} >
  <option value="3">3 X 3</option>
  <option value="4">4 X 4</option>
  <option selected value="5">5 x 5</option>
  
</select>

<button onClick={(e)=>props.handleButton(2)}>next </button>
            
        </div>
    )
}
