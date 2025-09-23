import './App.css';
import {Greetings} from './components/Greetings';
import { PeopleList } from './components/PeopleList';

const people = [{
  name: 'John',
  age: 40,
  hairColor: 'Brown'
},
{
  name: 'Maria',
  age: 25,
  hairColor: 'Blonde'
},
{
  name: 'Joseph',
  age: 55,
  hairColor: 'Black'
}];

function App() {

  let newMsgs = (max) => {
   return Math.floor(Math.random() * max);
  };
  
  return (
    <div className="App">
      <header className="App-header">
       <Greetings name="Raphael" numOfMsgs={newMsgs(100)} />
       <PeopleList people={people} />
      </header>
    </div>
  );
}

export default App;
