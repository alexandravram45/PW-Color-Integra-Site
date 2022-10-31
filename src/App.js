import React, { useState } from 'react'
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import CosulMeu from './pages/cosulMeu';
import Favorite from './pages/favorite';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/Sign Up/SignUp';
import SideMenu from './components/SideMenu/SideMenu';
import CreateProduct from './components/Products/CreateProduct'

function App() {

  const [showSideMenu, setShowSideMenu] = useState(true);

  // const show = () => {
  //   if (Route.path === '/signUp' || Route.path === '/logIn'){
  //     setShowSideMenu(false)
  //   }
  //   else setShowSideMenu(true)
  // }

  return (
    <Router>
      <Navbar /> 
      {showSideMenu && <SideMenu />}
      <Routes>
        <Route path='/' element={<Home setShowSideMenu={setShowSideMenu}/>} />
        <Route path='/logIn' element={<LogIn setShowSideMenu={setShowSideMenu}/>} />
        <Route path='/cosulMeu' element={<CosulMeu setShowSideMenu={setShowSideMenu}/>} />
        <Route path='/favorite' element={<Favorite setShowSideMenu={setShowSideMenu}/>} />
        <Route path='/adaugaProdus' element={<CreateProduct setShowSideMenu={setShowSideMenu}/>} />
        <Route path='/signUp' element={<SignUp setShowSideMenu={setShowSideMenu} />
        } />
      </Routes>
    </Router>
  );
}

export default App;
