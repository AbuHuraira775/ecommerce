import React from 'react'

function InpComponent({value,type, placeholder, name, onchange, calssname}) {
  return (
    <input 
      type={type} 
      value={value} 
      placeholder={placeholder} 
      name={name} 
      onChange={onchange} 
      className={calssname}
     />
  )
}

export default InpComponent