import React from 'react'

function BtnComponent({onClick, btnText, className}) {
  return <button onClick={onClick} className={className}>{btnText}</button>
}

export default BtnComponent