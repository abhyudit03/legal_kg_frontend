import React, { Fragment } from "react";

const Nav = () => (
    <div class="nav">
    <input type="checkbox" id="nav-check"/>
    <div class="nav-header">
      <div class="nav-title">
        Legal Kg
      </div>
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <div class="nav-links">
      <a href="//github.io/jo_geek" target="_blank">Home</a>
      <a href="http://stackoverflow.com/users/4084003/" target="_blank">Browse Legislation</a>
      <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">New Legislation</a>
      <a href="https://codepen.io/jo_Geek/" target="_blank">Changes to Legislation</a>
      <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">Dummy</a>
    </div>
  </div>

);

export default Nav;

