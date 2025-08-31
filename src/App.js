import logo from './logo.svg';
import './App.css';
import {Greetings} from './components/Greetings';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greetings />
      </header>
    </div>
  );
}

export default App;
