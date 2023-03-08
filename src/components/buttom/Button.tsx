import './button.scss'
import { addValue } from '../../store/CalcSlice'
import { useAppDispatch } from '../../hooks/useStore'

interface buttonProps {
    value:number | string,
}

function Button({value}: buttonProps) {
 const clazz = value === 0 ? 'zero' : value === '=' ? 'equal' : ''
 const dispatch = useAppDispatch()
 
  return (
    <div className={`btn-wrapper ${clazz}`} onClick={() => dispatch(addValue(value))}>
        {value}
    </div>
  )
}

export default Button