import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage, CounterButtonPage, PeopleListPage, ControlledFormPage} from './pages/'
import './App.css';
import { ProtectedPage } from './pages/ProtectedPage';
import {Navbar} from './Navbar'


function App() {
  
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="App-header">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/counter" element={<CounterButtonPage />} />
            <Route path="/list" element={<PeopleListPage />} />
            <Route path="/protected" element={<ProtectedPage />} />
            <Route path="/controlled-form" element={ <ControlledFormPage />} />          
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
