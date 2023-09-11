import { useEffect } from "react"

const Button = (props) => {
  const {
    type,
    children,
    ...rest
  } = props

  const selectorClass = {
    default: 'hover:bg-orange-400 hover:text-white'
  }

  const styleProps = {
    active : `border-2 border-orange-300 bg-orange-400 text-white ${selectorClass['default']}`,
    default: `border-2 border-orange-300 text-slate-800 ${selectorClass['default']}`,
    static: 'border-2 border-cyan-900 hover:bg-cyan-800 bg-cyan-900 text-white'
  }

  return (
    <button {...rest} className={`${type ? styleProps[type] : styleProps['default']} ${rest.className} transition rounded-full p-2 min-w-full`}>{children}</button>
  )
}

export default Button