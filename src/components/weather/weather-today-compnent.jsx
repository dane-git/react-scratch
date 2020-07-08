import React from 'react'

import './card-list.styles.css';

export const todayWeather = (props) => {
  // console.log(props)
  console.log(props.children)
  return <div className='weather-today'> {props.children}</div >
}