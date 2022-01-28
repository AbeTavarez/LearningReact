import React from 'react'
import spinner from './spinner.gif';

const Spinner = () => {
   return ( <>
        <img src={spinner} alt='loading...' style={spinnerStyle}/> 
    </>)
}

const spinnerStyle = {
    width: '200px',
    margin: 'auto',
    display: 'block'
}

export default Spinner
