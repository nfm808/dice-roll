import React from 'react'
import './Die.css'

export default function Die(props) {
  
  return (
    <span className={`Die ${props.anime}`} style={ {color: 'blue'} }>
      <i className={`fas fa-dice-${props.iconText} fa-7x ${props.anime}`} ></i>
    </span>
  )
}

Die.defaultProps = {
  iconText: 'one'
}
