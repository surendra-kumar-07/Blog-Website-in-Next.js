const Button = ({
    type = 'button',
    bgColor = 'bg-blue-400',
    textColor = 'text-white',
    className = '',
    btnName,
    ...props
}) => {
  return (
    <button type={type} className={`font-bold py-2 rounded-xl ${bgColor} ${textColor} ${className}`} {...props}>{btnName}</button>
  )
}

export default Button