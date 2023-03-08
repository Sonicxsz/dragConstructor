import { useAppSelector } from '../../hooks/useStore'
import './screen.scss'
function Screen() {
  const {items, status} = useAppSelector(state => state.CalcSlice)
  const editable = status === 'Runtime'

  return (
  
    <div className='screen-wrapper'>
        {editable ? items : '0'}
    </div>

  )
}

export default Screen