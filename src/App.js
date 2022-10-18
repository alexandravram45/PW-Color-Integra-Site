import React from 'react'
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import CosulMeu from './pages/cosulMeu';
import Favorite from './pages/favorite';
import LogIn from './components/LogIn/LogIn';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logIn' element={<LogIn />} />
        <Route path='/cosulMeu' element={<CosulMeu />} />
        <Route path='/favorite' element={<Favorite />} />
      </Routes>
    </Router>
  );
}

export default App;
