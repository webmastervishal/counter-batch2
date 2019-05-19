//presentational component

import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
    // console.log(props);
    const {countvalue,incHandler, decHandler} = props;
    const countTitle = "countTitle";
    
    return(
        <React.Fragment>
            <h1 
                className={countTitle}
            >
                Counter : 
                <span 
                    className="countValue"
                >
                    {countvalue}
                </span>
            </h1>
            <button onClick={incHandler}>+</button>
            <button onClick={decHandler}>-</button>
        </React.Fragment>
    )
}

Counter.propTypes = {
    countvalue : PropTypes.number,
    incHandler: PropTypes.func,
    decHandler: PropTypes.func
}

export default Counter;
