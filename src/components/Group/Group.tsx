import './group.scss'

interface groupProps {
    children:JSX.Element | JSX.Element[],
    type?: 'grid',
    elType:string
    
}



function Group({children, type, elType}: groupProps) {
  const clazz = type ? 'group-grid' : 'group-flex'

  const handleDragStart = (type: string) => {
    return (e: React.DragEvent) => e.dataTransfer.setData('element', type)
  }

  return (
    <div draggable onDragStart={handleDragStart(elType!)}  className={`group-wrapper ${clazz}`}>
       {children}
    </div>
  )
}

export default Group