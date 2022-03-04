import React from 'react'
import "./styles.scss"

const StandardHeader = (props) => {
  return (
    <div className="photoHeader" style={{backgroundImage: `url(${props.bgImage})`}} ></div>
  )
}

export default StandardHeader