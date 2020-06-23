import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Fade from 'react-reveal/Fade';

const SingleProject = (props) => {
    
        return (
            <div className="single-project">

                {props.project.map((item, i) =>(
                    <div className="content project-content">

                        <div className="project-landing">
                            <Fade>
                            <div className=" project-headings">
                                <h1>{item.title}</h1>
                                <p>{item.shortDesc}</p>
       
                                    <div className=" project-buttons">
                                        {(item.liveSite) &&     
                                            <a href={item.liveSite} target="_blank" rel="nofollow noopener" style={{color:'#111822'}}>Visit Live</a>
                                        }

                                        {( item.github) &&    
                                            <a href={item.github} target="_blank" rel="nofollow noopener">GitHub</a>
                                        }
                                    </div>
                            </div>
                            
                            {item.featuredImg ?                             
                                <img className="feat-img" src={item.featuredImg} alt="Project featured image"></img> :
                                <div className="feat-img-placeholder" style={{backgroundColor: '#1E2C3C'}}>
                                    <h3>COMING SOON</h3>
                                </div>
                            }
                            </Fade>
                        </div>

                        <div className="group">
                        <section className="project-overview">
                                <h2>Overview</h2>
                                <hr/>
                                <p>{item.overview}</p>
                        </section>
                        
                            <section className="project-tools">
                                <h2>Languages / Tools</h2>
                                <hr/>
                            
                                <ul>
                                    {item.tags.map((tags, i) => (
                                        <li>{tags}</li>
                                    ))} 
                                </ul>
                            </section>
                        </div>

                        {item.responsibilities &&
                            <section className="project-resp">
                                <h2>Responsibilities</h2>
                                <hr/>

                                <ul>
                                    {item.responsibilities.map((responsibility, i) => (
                                        <li>{responsibility}</li>
                                    ))}
                                </ul>
                                
                            </section> 
                            
                        }

                            {item.members &&
                            <section className="project-members">
                                
                                <h2>Development Team</h2>
                                <hr/>
                                
                                <ul>
                                    {item.members.map((member, i) => (
                                        <li>{member}</li>
                                    ))}
                                </ul>
                                
                            </section> 
                        }
                        
                        <section className="project-screenshots">
                            <h2>Design</h2>
                            <hr/>

                            <div className="screenshot-container">
                                    {item.colours &&
                                        <div className="colour-scheme">
                                            {item.colours.map((color, i) => (
                                                <div>
                                                    <span className="dot" style={{backgroundColor: color}}></span>
                                                    <p>{color}</p>
                                                </div>
                                            ))}
                                        </div>
                                    }
                                {item.screenshots.map((img, i) => (
                                    <img src={img} alt='project screenshot'></img>
                            ))}
                            </div>
                            
                        </section>
                        
                        
                        <section className="project-code">
                                <h2>Code Snippet</h2>
                                <hr/>
                                <p>{item.codeDesc}</p>

                                <SyntaxHighlighter language="javascript" style={tomorrowNight}>
                                    {item.codeSnippets}
                                </SyntaxHighlighter>
                            
                        </section>
                        

                    </div>
                ))}
            </div>
        );
}

export default SingleProject;
