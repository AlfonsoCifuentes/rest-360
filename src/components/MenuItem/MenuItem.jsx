import React from 'react'
import "./styles.scss";

const MenuItem = (props) => {
  return (
    <div>
    <div className='menuItemDiv'>
    <h1>{props.product}</h1>
    </div>
   
    </div>
  )
}

export default MenuItem