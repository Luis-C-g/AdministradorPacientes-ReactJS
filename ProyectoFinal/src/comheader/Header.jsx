import React from 'react'
import "./compheader.css"

function Header(props){

  return (
      <div>
        <h1 className='headers'>{props.titul}</h1>
      </div>
  )
}

export default Header
