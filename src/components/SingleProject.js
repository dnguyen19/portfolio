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
                                        <a href={item.liveSite} target="_blank">Visit Live</a>
                                        <a href={item.github} target="_blank">GitHub</a>
                                </div>
                            </div>
                            
                            <img className="feat-img" src={item.featuredImg} alt="Project featured image"></img>
                            </Fade>
                        </div>

                        
                            <section className="project-overview">
                                <Fade bottom>
                                    <h2>Overview</h2>
                                    <hr/>
                                </Fade>

                                <Fade bottom>
                                    <p>{item.overview}</p>
                                </Fade>
                            </section>
                        

                        
                        <div className="group">
                            <section className="project-tools">
                                <Fade bottom>
                                    <h2>Languages / Tools</h2>
                                    <hr/>
                                </Fade>

                                <Fade bottom>
                                    <ul>
                                    {item.tags.map((tags, i) => (
                                        <li>{tags}</li>
                                    ))} 
                                    </ul>
                                </Fade>
                                
                            </section>

                            {item.members &&
                            <section className="project-members">
                                <Fade bottom>
                                    <h2>Development Team</h2>
                                    <hr/>
                                </Fade>

                                <Fade bottom>
                                    <ul>
                                        {item.members.map((member, i) => (
                                            <li>{member}</li>
                                        ))}
                                    </ul>
                                </Fade>
                            </section> 
                        }
                        </div>
                        

                        
                        {item.responsibilities &&
                            <section className="project-resp">
                                <Fade bottom>
                                    <h2>Responsibilities</h2>
                                    <hr/>
                                </Fade>
                                <Fade bottom>
                                <ul>
                                    {item.responsibilities.map((responsibility, i) => (
                                        <li>{responsibility}</li>
                                    ))}
                                </ul>
                                </Fade>
                            </section> 
                            
                        }
                        
                        <section className="project-screenshots">
                            <Fade bottom>
                                <h2>Design</h2>
                                <hr/>
                            </Fade>

                            <div className="screenshot-container">
                                    {item.colours &&
                                        <div className="colour-scheme">
                                            {item.colours.map((color, i) => (

                                                <div>
                                                    <Fade>
                                                    <span className="dot" style={{backgroundColor: color}}></span>
                                                    <p>{color}</p>
                                                    </Fade>
                                                </div>
                                            ))}
                                        </div>
                                    }
                                {item.screenshots.map((img, i) => (
                                    <Fade>
                                        <img src={img}></img>
                                    </Fade>
                            ))}
                            </div>
                            
                        </section>
                        
                        
                        <section className="project-code">
                            <Fade bottom>
                                <h2>Code Snippet</h2>
                                <hr/>
                            </Fade>
                            <Fade>
                                <p>{item.codeDesc}</p>
                                <SyntaxHighlighter language="javascript" style={tomorrowNight}>
                                    {item.codeSnippets}
                                </SyntaxHighlighter>
                            </Fade>
                        </section>
                        

                    </div>
                ))}
            </div>
        );
}

export default SingleProject;
