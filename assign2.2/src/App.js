import React, { Component } from 'react';
import Output from './Validation/Validation';
import Comp from './CharComponent/CharComponent';
import './App.css';

class App extends Component {
  state={
    length:[{plength:0}],
    chars:[]
  }
  deleteHandler=(charIndex)=>{
    const chars=[...this.state.chars];
    chars.splice(charIndex,1);
    this.setState({chars:chars})
  }
  changeListener=(event)=>{
    let ch=event.target.value[event.target.value.length-1];
    let code="\n".charCodeAt(0);
    if(code==="08")
    {return null}
    else{
      return(this.setState({
        length:[{plength:event.target.value.length}],
        chars:[...this.state.chars,ch]
      }));
    }
  }
  render() {
    return (
      <div className="App">
        <input type="Text"  onChange={this.changeListener}></input>
        <h1>{this.state.length[0].plength}</h1>
        <Output paralen={this.state.length[0].plength}></Output>
        {this.state.chars.map((char,index)=>{
          return <Comp 
          click={()=>this.deleteHandler(index)}
          character={char}
          key={index}/>
        })}
      </div>
    );
  }
}

export default App;
