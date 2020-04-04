import React from 'react'
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import './GridStyle.css'

export default function Download(props) {

    let downloadHandler=(event)=>{
        event.preventDefault();
        domtoimage.toBlob(document.getElementById('my-node'))
        .then(function (blob) {
            saveAs(blob, 'myImage.png');
        });
      }
      let newData = props.data.filter((item,index)=>index<(props.gridSize*props.gridSize))
      let p = newData.map(item => <div>{item}</div>)

    return (
        
        <div>
             <div >
          <div className='grid-container' id='my-node' style={{gridTemplateColumns:`repeat(${props.gridSize},1fr)`}}>
{p}

            

          </div>

        </div>
        <button onClick={()=>props.handleButton(2)}>prev</button>
        <button type='submit' onClick={downloadHandler}>download</button>
        </div>
    )
}
