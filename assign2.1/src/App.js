import React, { Component } from 'react';
import './App.css';
import './UserOutput/UserOutput.css'
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  
  state={
    users:['Rajnish','Rohit','Pratik']
  }

  changeHandler=(newName)=>{
    this.setState({
      users:['Rajnish',newName,'Pratik']
    });
  }

  Handler=()=>{
    this.setState({
      users:['Rajnish','Ashish','Pratik']
    });
  }

  inputHandler=(event)=>{
    this.setState({
      users:['Rajnish',event.target.value,'Pratik']
    });
  }

  render() {
    return (
       <div className="App">
         <UserInput
         username={this.state.users[1]}
         click={this.changeHandler.bind(this,'Uday!')}
         input={this.inputHandler}
         />
        <UserOutput 
        username={this.state.users[1]}
        />
        <button className="UserOutput" onClick={this.Handler}>Change Name</button>
      </div>
    );
  }
}

export default App;
