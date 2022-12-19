import React from 'react'
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import CosulMeu from './pages/cosulMeu';
import Produse from './pages/Produse';
import Birotica from './pages/birotica';
import Favorite from './pages/favorite';
import Papetarie from './pages/papetarie';
import Craft from './pages/craft';
import Jucarii from './pages/jucarii';
import Party from './pages/party';
import Reduceri from './pages/reduceri';
import IT from './pages/it';
import Caiete from './pages/caiete';
import Ghiozdane from './pages/ghiozdane';
import LogIn from './components/LogIn/LogIn';
import ContulMeu from './pages/contulMeu';
import SignUp from './components/Sign Up/SignUp';
import CreateProduct from './components/Products/CreateProduct'
import { AuthContextProvider } from './context/AuthContext';
import Checkout from './components/Checkout/checkout';
import Orders from './pages/orders';


function App() {
  return (
    <Router>
      <Navbar />
      <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logIn' element={<LogIn />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/cosulMeu' element={<CosulMeu />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/adaugaProdus' element={<CreateProduct />} />
        <Route path='/contulMeu' element={<ContulMeu />} />
        <Route path='/produse' element={<Produse />} />
        <Route path='/produse/birotica' element={<Birotica />} />
        <Route path='/produse/papetarie' element={<Papetarie />} />
        <Route path='/produse/craft' element={<Craft />} />
        <Route path='/produse/jucarii' element={<Jucarii />} />
        <Route path='/produse/party' element={<Party />} />
        <Route path='/produse/caiete' element={<Caiete />} />
        <Route path='/produse/IT' element={<IT />} />
        <Route path='/produse/ghiozdane' element={<Ghiozdane />} />
        <Route path='/produse/signUp' element={<SignUp />} />
        <Route path='/produse/reduceri' element={<Reduceri />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
