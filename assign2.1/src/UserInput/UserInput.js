import React from 'react';
import './UserInput.css';
const useroutput=(props)=>{
    return(
        <div className="UserInput">
            <h1 onClick={props.click}>Write here</h1>
            <form>
            <input type="Text" onChange={props.input} value={props.username}></input><br/>
            </form>
        </div>
    )
}

export default useroutput;