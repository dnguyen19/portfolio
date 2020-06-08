import React from 'react';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div id="about">
            <Fade bottom>
                <h1>About Me</h1>
                <hr/>
                
                <div>
                    <p>My name is Denise Nguyen and I am a web developer based in Vancouver, BC. I graduated from BCIT’s Computer Information Technology and Technical Web Designer Program. During my time, I developed a passion for web development from working on school projects and by working on software development projects sponsored by BCIT. I enjoy designing simple user interfaces, building web apps, and learning new technologies along the way.</p>
                    <p>I had the opportunity to work as a UI/UX Designer in a summer internship where I was able to first experience designing and developing web applications in the working industry. My team and I went through the process of UX/UI development where we brainstormed, researched, and designed different prototypes for a project. After we agreed on a prototype, I developed a live version of this application using React.js. Based on my experience using React.js, I want to pursue more on the development side.</p>
                    <p>Currently, I am seeking a web development job where I want to explore and challenge myself with new technologies and opportunities.</p>
                </div>
                
            <div className="skills">
                <div className="tech-skills">
                    <h3>Technical Skills</h3>
                    <ul>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                        <li>Sass</li>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>Node.js</li>
                        <li>Python</li>
                    </ul>
                </div>

                <div className="design-skills">
                    <h3>Design Skills</h3>
                    <ul>
                        <li>UX/UI design</li>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>
                        <li>Adobe XD</li>
                    </ul>
                </div>
            </div>
            </Fade>
        </div>
    );
}

export default About;
