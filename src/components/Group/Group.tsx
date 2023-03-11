import './group.scss'

interface groupProps {
    children:JSX.Element | JSX.Element[],
    type?: 'grid',
    elType:string
    
}


function Group({children, type, elType}: groupProps) {
  const clazz = type ? 'group-grid' : 'group-flex'

  return (
    <div  className={`group-wrapper ${clazz}`}>
       {children}
    </div>
  )
}

export default Group