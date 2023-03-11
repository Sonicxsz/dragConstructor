import {ReactComponent as EmptyIcon} from '../../assets/emptyIcon.svg'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import {  items } from '../../App';
import { addElem, changePosition, removeElem} from '../../store/ElemsSlice';
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
    const newElements = [...elements]
    const targetIndex = newElements.indexOf(card)
    const sourceIndex = newElements.indexOf(currentEl)

    if (sourceIndex === targetIndex) return;

    newElements.splice(sourceIndex, 1)
    newElements.splice(targetIndex, 0, currentEl)


    dispatch(changePosition(newElements))

    if(e.target instanceof HTMLDivElement){
      const parent = e.target.closest('.red')
      if(parent){
        parent.className = 'dragzone' 
      }
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault()
      if(e.target instanceof HTMLDivElement){
        const parent = e.target.closest('.dragzone')
        if(parent){
          parent.className = 'red'
        }
      }
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    if(e.target instanceof HTMLDivElement){
      const parent = e.target.closest('.red')
      if(parent){
        parent.className = 'dragzone'
      }
    }
  
  }

  const handleStartPosition = (e:React.DragEvent, card:string) => { 
    setCurrentEl(card)
  } 

  const handleRemove = (elem: string) => {
    dispatch(removeElem(elem))
  }

  const renderElems = elements.map(i => {
     return items.find(el => {
      return el.name === i
     })
  })
  
  
  return (
    <div onDragOver={(e) => handleDragOver(e)} onDrop={handleDrop}  className={`constructor-wrapper ${clazz}`}>
      <>
        {!elements.length && ( <>
          <EmptyIcon/>
          <h2>Перетащите сюда</h2>
          <p>любой элемент из левой панели</p>
          </>)
        } 
          
      { renderElems.map(i => {
        return i && <div className='dragzone' key={i.id}  
        draggable onDrop={(e) => handlerPositionDrop(e, i.name)}  
        onDragLeave={(e) => handleDragLeave(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragStart={(e) => handleStartPosition(e, i.name)}
        onDoubleClick={() => handleRemove(i.name)}
        >
          <i.component />
        </div>  
      })}
      </>
    </div>
  )
}

export default Constructor