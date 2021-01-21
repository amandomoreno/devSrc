//import React from "react";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'
import M from "materialize-css/dist/js/materialize.min.js"

const NavBar = ({ user, handleLogout }) => {
  
  useEffect(() => {
    let sidenav = document.querySelector("#mobile-demo");
    M.Sidenav.init(sidenav, {edge:'right'});
  }, []);

  return (
    <>
      {user ? (

        <nav>
          <div id="NavBarDiv" className="nav-wrapper teal lighten-2" >
            {/* <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li id="userName" className="nav-link">Welcome, {user.name}</li>
            </ul> */}

            <a href="#" className="brand-logo">devSrc</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
            <ul id="NavBarList" className="right hide-on-med-and-down davidsNavBar">

            <li id="myNotebook">
              <a className="active" href="/myNotebook">myNotebook</a>
            </li>
            <li id="myNotebook">
              <a className="active" href="/search">searchSrc</a>
            </li>
            <li id="studyBuddy">
              <a className="active" href="/studyBuddy">studdyBuddy</a>
            </li>
            <li id="chat">
              <a className="active" href="/chat">liveChat</a>
            </li>
            <li id="myProfile">
              <a className="active" href="/myProfile">myProfile</a>
            </li>
            <li id="logOut" className="right">
              <a className="active" href=" " onClick={handleLogout}>logOut</a>
            </li>
            </ul>
          </div>

        <ul className="sidenav" id="mobile-demo">
         <li id="myNotebook">
              <a className="active" href="/myNotebook">myNotebook</a>
            </li>
            <li id="myNotebook">
              <a className="active" href="/search">searchSrc</a>
            </li>
            <li id="studyBuddy">
              <a className="active" href="/studyBuddy">studyBuddy</a>
            </li>
            <li id="chat">
              <a className="active" href="/chat">liveChat</a>
            </li>
            <li id="myProfile">
              <a className="active" href="/myProfile">myProfile</a>
            </li>
            <li id="logOut">
              <a className="active" href=" " onClick={handleLogout}>logOut</a></li>
        </ul>
        </nav>

      ) : (

          <nav>
            <div className="nav-wrapper teal lighten-2">
              <ul id="nav-mobile" className="right">
                <li>
                  <Link to="/login" className="nav-link">
                    Log In
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </nav>


      )}
    </>
  );
};

export default NavBar;