import React from 'react'
import {
    Nav,
    NavLink,
    NavMenu,
    NavSearch,
    SearchButton
  } from './NavBarElements';

  import { BiSearchAlt } from 'react-icons/bi'
  import { BsSuitHeart } from 'react-icons/bs'
  import { SlBasket } from 'react-icons/sl'
  import { BsFillPersonFill } from 'react-icons/bs'

const Navbar = () => {

  return (
    <>
      <Nav>
          <NavLink to="/">
              <img src={require('../../images/SiglaPNG.png')} alt='Color Integra' width={'70px'}/>
          </NavLink>
          <NavSearch>
              <form action="/" method='get' className='form' style={{ border: '1px solid #BDBDBD', borderRadius: '30px', width: '300px'}}>
                  <input
                        type="text"
                        id="nav-search"
                        placeholder='Cauta...'
                        name='s'
                        style={{backgroundColor: 'transparent', border: 0, width: '300px', ":focus": {border: '0'}}}
                    />
              </form>
              <SearchButton >
                <NavLink to="/" >
                  <BiSearchAlt />
                </NavLink>
              </SearchButton>
          </NavSearch>
          <NavMenu>
              <NavLink to="/contulMeu" activeStyle>
                  <BsFillPersonFill style={{marginRight: '5px'}}></BsFillPersonFill>
                  Contul Meu
              </NavLink>
              <NavLink to="/favorite" activeStyle>
                  <BsSuitHeart style={{marginRight: '5px'}}></BsSuitHeart>
                  Favorite
              </NavLink>
              <NavLink to="/cosulMeu" activeStyle>
                  <SlBasket style={{marginRight: '5px'}}></SlBasket>
                  Cosul meu
              </NavLink>
          </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar
