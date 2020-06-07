import React, { Component } from 'react';
import { BsFillPersonFill, BsCodeSlash,BsHouseFill  } from "react-icons/bs";

class NavMenu extends Component {
    
    handleClick(e, section) {
        e.preventDefault();
        const anchor = document.querySelector(section);
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    render() {
        return (
                <div className="nav-menu">
                  <nav>
                    <ul>
                      <li onClick={(e) => this.handleClick(e, '#landing' )}><BsHouseFill/></li>
                      <li onClick={(e) => this.handleClick(e, '#projects' )}><BsCodeSlash/></li>
                      <li onClick={(e) => this.handleClick(e, '#about' )}><BsFillPersonFill/></li>
                    </ul>
                  </nav>
                </div>
        );
    }
}

export default NavMenu;


