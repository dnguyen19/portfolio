import React, {useEffect} from 'react';
import SingleProject from '../components/SingleProject';
import Particle from '../components/Particle';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import {BsArrowLeft} from "react-icons/bs";

const Project = (props) => {
    
    useEffect(() => {
        window.scroll(0, 0)
      }, []);
      
    return (
        <div>
            <Particle className="particle-project"/>
            <div className="project-container">

                <div className="back-to-home">
                    <NavLink to="/" ><BsArrowLeft/></NavLink>
                </div>
                
                <div className="project-page">
                    <SingleProject project={props.project} />
                </div>
            </div>
            <Contact/>
            <Footer/>
        </div>
        
    );
}

export default Project;
