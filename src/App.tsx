import Constructor from './components/Constructor/Constructor';
import Switcher from './components/switcher/Switcher';
import EqualBoard from './components/boards/EqualBoard';
import NumberBoard from './components/boards/NumberBoarb';
import ScreenBoard from './components/boards/ScreenBoard';
import SighnBoard from './components/boards/SighnBoard';
import { useAppSelector } from './hooks/useStore';
import {arrT, extractNames} from './utils/fn'
export interface dragItem {
  id: number,
  name: string,
  component: () => JSX.Element
}

export const items:dragItem[] = [
  {id:1, name: 'numbers', component: NumberBoard},
  {id:2, name: 'screen', component: ScreenBoard},
  {id:3, name: 'sighn', component: SighnBoard},
  {id:4, name: 'equal', component: EqualBoard}
]
function App() {
  const elements = useAppSelector(state => state.ElemsSlice.items)


  const handleDragStart = (type: string) => {
    return (e: React.DragEvent) => e.dataTransfer.setData('element', type)
  }
 
  return (
    <div className="app">
      <div className="container">
          {items.map(i => {

               const isExist = elements.includes(i.name)
               const clazz = isExist ? 'opacity' : '';
            
            return  <div key={i.id} className={clazz} draggable={!isExist} 
                          onDragStart={handleDragStart(i.name)}>
              {<i.component />}
            </div>
          })}
      </div>
      <div className="container">
          <Switcher/>
          <Constructor/>
      </div>
      
    </div>
  );
}

export default App;
