import React, {useId} from 'react'

const FileUpload = ({
    options=[],
    label,
    className='',
    ...props
}, ref) => {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className='text-gray-600 font-semibold block mb-1 pl-1'>{label}</label>}
        <input id={id} ref={ref} type='file'/>
    </div>
  )
}

export default React.forwardRef(FileUpload)