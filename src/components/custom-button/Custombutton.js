import React from 'react'
import './custom-button.scss';
export default function Custombutton({ children, ...otherProps }) {
  return (
    <button className='custom-button' {...otherProps}>
    {children}
  </button>
  )
}
