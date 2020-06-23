import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <div className="footer">
            <Fade bottom>
            <a href="https://github.com/dnguyen19" target="_blank" rel="noopener noreferrer"><FaGithub title="GitHub"/></a> 
            <a href="https://www.linkedin.com/in/denise-nguyen-ba791a1aa/" target="_blank" rel="noopener noreferrer"><FaLinkedin title="LinkedIn"/></a> 
            <p>&copy; 2020 Denise Nguyen</p>
            </Fade>
        </div>
    );
}

export default Footer;
