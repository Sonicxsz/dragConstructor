import Constructor from './components/Constructor/Constructor';
import Switcher from './components/switcher/Switcher';
import NumberBoard from './components/boards/NumberBoarb';
import SighnBoard from './components/boards/SighnBoard';
import EqualBoard from './components/boards/EqualBoard';
import ScreenBoard from './components/boards/ScreenBoard';

function App() {

  return (
    <div className="app">
      <div className="container">
          <ScreenBoard/>
          <NumberBoard/>
          <SighnBoard/>
          <EqualBoard />
      </div>
      <div className="container">
          <Switcher/>
          <Constructor/>
      </div>
      
    </div>
  );
}

export default App;
