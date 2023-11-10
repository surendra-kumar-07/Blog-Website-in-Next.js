import React, {useId} from 'react'

const SelectBox = ({
    options=[],
    label,
    className='',
    ...props
}, ref) => {
    const id = useId() 

  return (
    <div className='w-full'> 
    {label && <label htmlFor={id} className='text-gray-600 font-semibold inline-block mb-1 pl-1'>{label}</label>}
    <select id={id} {...props} ref={ref} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full focus:border-cyan-400 ${className}`}>
        {options?.map((option)=>(
            <option key={option} value={option}>{option}</option>
        ))}
    </select>
    </div>
  )
}

export default React.forwardRef(SelectBox)
