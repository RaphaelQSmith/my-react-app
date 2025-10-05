import './App.css';
import {Greetings} from './components/Greetings';
import { PeopleList } from './components/PeopleList';
import { useState } from 'react';



function App() {

  const [numberOfClicks, setNumberOfClicks]= useState(0);
  const increment = () =>setNumberOfClicks(numberOfClicks + 1);
  
  return (
    <div className="App">
      <header className="App-header">
      <Greetings
      onIncrement={increment} 
      numberOfClicks={numberOfClicks} />
      <PeopleList people={people} />
      </header>
    </div>
  );
}

export default App;
