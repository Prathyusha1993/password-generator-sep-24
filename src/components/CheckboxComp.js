import React from 'react'

const CheckboxComp = ({state, onChange, title}) => {
    return (
        <div>
            <input type='checkbox'
                checked={state}
                onChange={onChange}
            />
            <label>{title}</label>
        </div>
    )
}

export default CheckboxComp;