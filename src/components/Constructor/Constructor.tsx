import {useState} from 'react';
import {ReactComponent as EmptyIcon} from '../../assets/emptyIcon.svg'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import ScreenBoard from '../boards/ScreenBoard';
import NumberBoard from '../boards/NumberBoarb';
import SighnBoard from '../boards/SighnBoard';
import EqualBoard from '../boards/EqualBoard';
import { addElem } from '../../store/ElemsSlice';
import './constructor.scss'

function Constructor() {
  const elements = useAppSelector(state => state.ElemsSlice.items)
  const clazz = elements.length <= 0 && 'non-active'
  const dispatch = useAppDispatch()

  const handleDrop = (e:React.DragEvent) => {
    const type = e.dataTransfer.getData('element')
    console.log(type)
    dispatch(addElem(type))
  }
  
  const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault()
      
  }

  const renderElems = elements.map((i) => {
        if(i === 'screen'){
          return <ScreenBoard />
        }
        if(i === 'numbers'){
          return <NumberBoard />
        }
        if(i === 'equal'){
          return <EqualBoard />
        }
        if(i === '='){
          return <SighnBoard />
        }
          
     
    
      })
        
    
  

  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop}  className={`constructor-wrapper ${clazz}`}>
        {elements.length <= 0 && ( <>
          <EmptyIcon/>
          <h2>Перетащите сюда</h2>
          <p>любой элемент из левой панели</p>
          </>)}
         {renderElems}
      
    </div>
  )
}

export default Constructor