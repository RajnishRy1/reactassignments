import React from 'react';


const output=(props)=>{
    if(props.paralen<5){
        return(
            <div>
                <h2>string length too short!</h2>
            </div>
        )
    }
    if(props.paralen>20){
        return(
            <div>
                <h2>string length too long!</h2>
            </div>
        )
    }
    return null;
    
}

export default output;