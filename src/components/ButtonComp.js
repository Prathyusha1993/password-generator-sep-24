import React from 'react'

const ButtonComp = ({onClick, text, customClass}) => {
  return (
    <div>
        <button onClick={onClick} className={customClass}>{text}</button>
    </div>
  )
}

export default ButtonComp;