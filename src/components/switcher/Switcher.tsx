import {useState} from 'react'
import { changeStatus } from '../../store/CalcSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore'
import './switcher.scss'
import {ReactComponent as EyeIcon} from '../../assets/eye.svg'
import {ReactComponent as SelectorIcon} from '../../assets/selector.svg'

const elems = ['Runtime', 'Constructor']

function Switcher() {
  const [active, setActive] = useState(1)
  const dispatch = useAppDispatch()
 
  const handleChangeMode = (ind:number, val:string) => {
      return () =>{
        setActive(ind)
        dispatch(changeStatus(val))
      }
    }

  const renderedElems = elems.map((i, ind) => {
    const Icon = i === 'Runtime' ? EyeIcon  : SelectorIcon
    const clazz = ind === active ? 'switch-btn switch-btn-active' : 'switch-btn'
    return <div className={clazz} onClick={handleChangeMode(ind, i)}><Icon />{i}</div>
  })
  return (
    <div className='switcher-wrapper'>
    {renderedElems}

    </div>
  )
}

export default Switcher