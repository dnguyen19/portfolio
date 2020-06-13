import React from 'react';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Thumbnail = (props) => {

    return (
        <Fade bottom>
            {props.projects.map((project, i) => (
                <div className="thumbnail" id={project.id}>

                    <Link to={project.link} style={{textDecoration: 'none'}}>
                        {project.featImg ? 
                            <div className="thumbnail-img" style={{backgroundImage: 'url('+project.featImg+')', backgroundColor: '#f5f5f5'}}></div> :
                            <div className="thumbnail-img" style={{backgroundColor: '#1E2C3C'}}>
                                <h3>COMING SOON</h3>
                            </div>
                        }
                    </Link>

                    <div className="project-content">
                        <h2 className="title">{project.title}</h2>
                        <div className="tags">
                            {project.tags.map((tags, i) => (
                                <p>{tags}</p>
                            ))} 
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

