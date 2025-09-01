import './App.css';
import {Greetings} from './components/Greetings';

function App() {

  let newMsgs = (max) => {
   return Math.floor(Math.random() * max);
  };
  
  return (
    <div className="App">
      <header className="App-header">
       <Greetings name="Raphael" numOfMsgs={newMsgs(100)} />
      </header>
    </div>
  );
}

export default App;
