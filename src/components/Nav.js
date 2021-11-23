import React from "react";
import logo from "../images/logo1.jpg";
import "../components/login/authStyles.css";
import { useState, useContext } from "react";
import { FaCopyright } from "react-icons/fa";
import { Nav, NavLink, NavBtn, NavBtnLink } from "./NavbarElements";
import Home from "./Home";
import { Out } from "./Out";
import Quest from "../components/Quest";
import Auth from "./Auth";

const Navbar = () => {
  const [click, setClick] = useState(true);

  const closeMobileMenu = () => setClick(false);

  const { authorized} = useContext(Auth);

  function In() {
    {/* <Quest />; */}
    if (authorized) {
      return <Home />;
    } else {
      return <Out />;
    }
  }

  return (
    <>
      <Nav className="header">
        <NavLink to="Quest" onClick={closeMobileMenu}>
          <img
            style={{
              width: 40,
            }}
            src={logo}
            alt="Logo"
          />

          <NavBtn
            style={{
              size: "small",
            }}
          >
            <NavBtnLink to="Quest">
              <h4>UEST</h4>
            </NavBtnLink>
          </NavBtn>
        </NavLink>
        <In />
      </Nav>

      <Nav className="footer">
        <h6>
          Copyright <FaCopyright id="icon" /> Quest || Created by Ananya & Harsh
        </h6>
      </Nav>
    </>
  );
};

export default Navbar;
