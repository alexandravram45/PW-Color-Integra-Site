import React from 'react'
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import CosulMeu from './pages/cosulMeu';
import Favorite from './pages/favorite';
import LogIn from './components/LogIn/LogIn';
import ContulMeu from './pages/contulMeu';
import SignUp from './components/Sign Up/SignUp';
import CreateProduct from './components/Products/CreateProduct'
import { AuthContextProvider } from './context/AuthContext';


function App() {
  return (
    <Router>
      <Navbar />
      <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logIn' element={<LogIn />} />
        <Route path='/cosulMeu' element={<CosulMeu />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/adaugaProdus' element={<CreateProduct />} />
        <Route path='/contulMeu' element={<ContulMeu />} />
        <Route path='/signUp' element={<SignUp />
        } />
      </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
