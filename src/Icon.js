import React from 'react'

const Icon = ({value, imgName, handler}) => {
  return(
    <img src={imgName} alt={value} width='100' height='100' value={value} onClick={handler}/>
  )
}

export default Icon