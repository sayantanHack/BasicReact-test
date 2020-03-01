// This is a stateless Child 

import React from 'react';

const child = (props)=> {
    return(
        <div>
            <button onClick={props.actions}> {props.title}</button>  
        </div>
    );
}

export default child;