import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Public from './Routes/Public';
import Footer from './Components/Footer';
import AuthProvider from './Context/AuthContext';
import PreFooter from './Components/PreFooter';
import NavBar from './Components/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <NavBar />
          <Public />
          <PreFooter />
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
