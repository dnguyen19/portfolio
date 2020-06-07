import React from 'react';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Thumbnail = (props) => {

    return (
        <Fade bottom>
            {props.projects.map((project, i) => (
                <div className="thumbnail" id={project.id}>
                    <Link to={project.link}>
                    <div className="thumbnail-img" style={{backgroundImage: 'url('+project.featImg+')', backgroundColor: '#f5f5f5'}}></div>
                    </Link>
                    <div className="project-content">
                        <h2 className="title">{project.title}</h2>
                        <div className="tags">
                            <p>{project.tags}</p>
                        </div>
                        
                        <div className="desc-container">
                            <p className="desc">{project.desc}</p>
                            <br/>
                            <Link to={project.link} className="more-details-link">More Details</Link>
                        </div>
                        
                    </div>
                    
                </div>
            ))}
        
            
        </Fade>
    );
}

export default Thumbnail;

