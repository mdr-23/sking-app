import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Public from './Routes/Public';

function App() {
  return (
    <div className="App">

    <Router>
      <Navbar />
      <Public />
    </Router>


    </div>
  );
}

export default App;
