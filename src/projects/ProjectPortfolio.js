import React from 'react';
import Project from '../pages/Project';
import scLanding from '../images/portfolio/portfolio-thumbnail.png';

const code = `
import React, { Component } from 'react';
import { BsFillPersonFill, BsCodeSlash, BsHouseFill  } from "react-icons/bs";

class NavMenu extends Component {
    
    handleClick(e, section) {
        e.preventDefault();
        const anchor = document.querySelector(section)
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


`

const projectInfo = [
    {
        title: 'My Portfolio',
        shortDesc: 'A web portfolio showcasing my featured projects for my progress as a web developer.',
        tags: ['React', 'Sass', 'Adobe XD', 'Adobe Photoshop'],
        featuredImg: scLanding,
        overview: 'This portfolio was built with React.js and Sass to showcase my projects and to show who I am. With all my previous projects from BCIT, I selected the ones that I’m most proud of and showcase my skills as a web developer.',
        responsibilities: null,
        members: null,
        colours: ['#151E29', '#84DCCF', '#F6F6F6'],
        screenshots: [],
        codeDesc: 'The code below shows how I created a navigation bar where it will scroll to the anchor tag..',
        codeSnippets: code,
        liveSite: 'denisenguyen.ca/',
        github: '',
    }
]
const ProjectPortfolio = () => {
    return (
        <div>
            <Project 
                project={projectInfo}
            />
        </div>
    );
}

export default ProjectPortfolio;
