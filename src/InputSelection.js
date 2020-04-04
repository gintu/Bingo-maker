import React, { Component } from 'react'

export default class InputSelection extends Component {


    state={
        fill:false
    }

handleCheck=()=>{

    let flag= true
   
    
        for(let i=0;i<this.props.len;i++){
            
            if(this.props.data[i]===undefined || this.props.data[i]===''){
            flag=false
        }
    }

    if(!!flag){
        this.setState({fill:false})
        this.props.handleButton(3);
    }
    else{
        this.setState({fill:true})
    }
    
    
    

}
   
  render() {

    let p=[];
    for(let i=0;i<this.props.len;i++){
        p.push(<div><input onChange={(event)=>this.props.handle(event,i)} value={this.props.data[i]}/>
        
        {this.props.lim[i] && <div>letter limit exceeded</div>}
        </div>)

    }
    return (
      <div>
          <h1>add the questions</h1>
          {p}
          <button onClick={()=>this.props.handleButton(1)}>prev</button>
          <button onClick={this.handleCheck}>next</button>
          {this.state.fill && <div>fill the boxes before proceeding</div>}
      </div>
    )
  }
}
