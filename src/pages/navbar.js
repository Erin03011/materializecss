import React, { useEffect, useRef } from "react";
import M from 'materialize-css'

export default function Navbar()  {
  const dropdown = useRef()

  useEffect(()=>{

    if(dropdown){
      M.Dropdown.init(dropdown.current, { inDuration: 300, outDuration: 225})
    }
  }, [dropdown])
    return(
      <div>
        <div className="">
          <ul id="dropdown1" class="dropdown-content">
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li class="divider"></li>
            <li><a href="#!">three</a></li>
          </ul>
        </div>
  <nav>
    <div class="nav-wrapper">
      <a href="./logo-primary" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
    </div>

    )
}

