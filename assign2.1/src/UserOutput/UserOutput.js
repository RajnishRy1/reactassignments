import React from 'react';
import './UserOutput.css';

const useroutput=(props)=>{
    return(
        <div className="UserOutput">
            <p>This is for output!</p>
            <p>Working on Second assignment!</p>
            <p>Current user :{props.username}</p> 
        </div>
    )
}

export default useroutput;