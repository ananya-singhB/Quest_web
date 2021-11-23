import styled from 'styled-components'
import { NavLink as Link} from 'react-router-dom'

export const Nav = styled.nav`
    background: #000;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color: #15cdfc;
    }

    &:hover {
        trasition: all 0.2s ease-in-out;
        /* background: #00FFFF; */
        color: #7CFC00;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 100px) {
        display: none;

    }
`

export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

`;

export const NavBtnLink = styled(Link)`
    border-radius: 0px;
    background: #ffff;
    padding: 10px 10px;
    color: #191970;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    height:2.5em;

    margin-left: 0px;

    &:hover {
        trasition: all 0.2s ease-in-out;
        color: #010606;
    }

    &.active{
        color: #360805;
        background-color: #15cdfc;
    }
`;