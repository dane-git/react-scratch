import React from 'react'

import './card-list.styles.css';

export const CardList = (props) => {
  // console.log(props)
  console.log(props.children)
  return <div className='card-list'> {props.children}</div >
}