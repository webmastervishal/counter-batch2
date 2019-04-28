//presentational component

import React from 'react';

const Counter = (props) => {
    // console.log(props);
    const {countvalue,incHandler} = props;
    return(
        <React.Fragment>
            <h1>Counter : {countvalue}</h1>
            <button onClick={incHandler}>+</button>
            <button>-</button>
        </React.Fragment>
    )
}

export default Counter;