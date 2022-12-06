import React, { useEffect, useState } from 'react'
import {
    Nav,
    NavLink,
    NavMenu,
    NavSearch,
    SearchButton, 
    StyledBadge
  } from './NavBarElements';

  import AccountCircleIcon from '@mui/icons-material/AccountCircle';
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
  import { BsFillPersonFill } from 'react-icons/bs'

  import { database } from "../../firebase"

  import { collection, getCountFromServer } from "firebase/firestore";


const Navbar = () => {

  const [favs, setFavs] = useState(0)

    const favSize = async () => { 
    const snapshot = await getCountFromServer(collection(database, "favorites")) 
    console.log(snapshot.data().count)
     setFavs(snapshot.data().count)
    }

    useEffect(() => {favSize()}, favs)


  // const snapshotBasket =  async () => { await getCountFromServer(collection(database, "basket")) }
  // const basketSize = snapshotBasket.data().count

  return (
    <>
      <Nav>
          <NavLink to="/">
              <img src={require('../../images/SiglaPNG.png')} alt='Color Integra' width={'70px'}/>
          </NavLink>
         
          <NavMenu>
              <NavLink to="/contulMeu" activeStyle>
                  <AccountCircleIcon style={{marginRight: '5px'}} />
                  Contul Meu
              </NavLink>
              <NavLink to="/favorite"  activeStyle>
                <StyledBadge badgeContent={favs} color="secondary">
                  <FavoriteIcon style={{marginRight: '5px'}} />
                </StyledBadge>
                  Favorite
              </NavLink>
              <NavLink to="/cosulMeu" activeStyle>
              <StyledBadge badgeContent={0} color="secondary">
                <ShoppingCartIcon style={{marginRight: '7px'}} />
              </StyledBadge>
                  Cosul meu
              </NavLink>
          </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar
