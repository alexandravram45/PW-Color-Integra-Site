import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: #fff;
    box-shadow: 1px 2px 5px #ccc;
    height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`
export const NavLink = styled(Link)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #ff00fe;
    }
`;


export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
`;


export const NavSearch = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SearchButton = styled.button`
    background-color: transparent;
    font-size: 30px;
    color: #ff00fe;
    border: 0;
`;






