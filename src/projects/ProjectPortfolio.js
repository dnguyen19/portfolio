import React from 'react';
import Project from '../pages/Project';
import mockup from '../images/portfolio/mockups-portfolio.png';
import mcHome from '../images/portfolio/screenshots-portfolio-home.png';
import mcProjects from '../images/portfolio/screenshots-portfolio-projects.png';

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
        featuredImg: mockup,
        overview: 'This portfolio was built with React.js and Sass to showcase my projects and a bit of who I am. With all my previous projects from BCIT, I selected the ones that I’m most proud of and showcase my skills as a web developer. This website was built upon content plan, information architecture, wireframes, and mockups.',
        responsibilities: null,
        members: null,
        colours: ['#111822', '#84DCCF', '#F6F6F6'],
        screenshots: [mcHome, mcProjects],
        codeDesc: 'The code below shows how I created a navigation bar where it will scroll to the anchor tag.',
        codeSnippets: code,
        liveSite: 'https://denisenguyen.ca/',
        github: 'https://github.com/dnguyen19/portfolio',
    }
]
const ProjectPortfolio = () => {
    return (
        <Project 
            project={projectInfo}
        />
    );
}

export default ProjectPortfolio;
