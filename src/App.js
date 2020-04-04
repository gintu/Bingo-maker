import React, { Component } from 'react'
import GridSelection from  './GridSelection'
import InputSelection from  './InputSelection'
import Download from './Download'



export default class App extends Component {

  state={
    gridSize:3,
    data:[],
    lim:[],
    step:1,
    val:'',
 
  }

  handleGridSizeChange=(event)=>{
    this.setState({gridSize:event.target.value})
 
  }

  handleButton=(value)=>{
    this.setState({step:value})
  }

  handleChange=(event,value)=>{
    
    if(event.target.value.length>16){
      let newLim=[...this.state.lim]
      newLim[value]=true
      this.setState({lim:newLim})
    }else{
      let newLim=[...this.state.lim]
      newLim[value]=false
      this.setState({lim:newLim})
    let newData = [...this.state.data]
    newData[value]=event.target.value;
    this.setState({data:newData})
  }
}
  
  render() {
    return (
      <div>
        {this.state.step===1 && <GridSelection handle={this.handleGridSizeChange} gridSize={this.state.gridSize} handleButton={this.handleButton}/>}
        {this.state.step===2 && <InputSelection handleButton={this.handleButton} len={this.state.gridSize*this.state.gridSize} handle={this.handleChange} data={this.state.data} lim={this.state.lim}/> }
        {this.state.step===3 && <Download data={this.state.data} gridSize={this.state.gridSize} handleButton={this.handleButton}/>}

       
        
      </div>
    )
  }
}
