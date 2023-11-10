'use client'
import React, { useId } from 'react'

const InputBox = ({
  label,
  type = 'text',
  className = '',
  ...props

},ref) => {
  const id = useId()

  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className='text-gray-600 font-semibold inline-block mb-1 pl-1'>{label}</label>}

      <input ref={ref} type={type} id={id} className={`outline-none bg-white rounded p-2 w-full focus:border-cyan-400 ${className}`} {...props}/>
    </div>
  )
}

export default React.forwardRef(InputBox)
