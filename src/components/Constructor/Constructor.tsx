import {ReactComponent as EmptyIcon} from '../../assets/emptyIcon.svg'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import {  items } from '../../App';
import { addElem, changePosition,  } from '../../store/ElemsSlice';
import './constructor.scss'
import { useState } from 'react';


function Constructor() {
  const elements = useAppSelector(state => state.ElemsSlice.items)
  const [currentEl, setCurrentEl] = useState<string>('')

  const clazz = elements.length <= 0 && 'non-active'
  const dispatch = useAppDispatch()


  const handleDrop = (e:React.DragEvent) => {
    const type = e.dataTransfer.getData('element')
      dispatch(addElem(type))

  }



  const handlerPositionDrop = (e:React.DragEvent, card:string) => {
    e.preventDefault()
    let newArrList = [...elements]
    const dropIndx = elements.indexOf(card)

    newArrList.splice(dropIndx, 0, currentEl)
    newArrList.splice(dropIndx + 1, 0, card)
   
    dispatch(changePosition(newArrList))
  }

  const handleDragOver = (e: React.SyntheticEvent<DragEvent>) => {
      e.preventDefault()
      if(e.target){
        e.target.className
      }
      
  }
  const handleStartPosition = (e:React.DragEvent, card:string) => { 
    setCurrentEl(card)
  } 

  const renderElems = elements.map(i => {
     return items.find(el => {
      return el.name === i
     })
  })

  



  
  
  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop}  className={`constructor-wrapper ${clazz}`}>
      <>
        {!elements.length && ( <>
          <EmptyIcon/>
          <h2>Перетащите сюда</h2>
          <p>любой элемент из левой панели</p>
          </>)
        } 
          
      { renderElems.map(i => {
        return i && <div key={i.id}  
        draggable onDrop={(e) => handlerPositionDrop(e, i.name)}  
        onDragStart={(e) => handleStartPosition(e, i.name)}
        >
          <i.component />
        </div>  
      })}
      </>
    </div>
  )
}

export default Constructor