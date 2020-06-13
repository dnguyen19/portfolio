import React from 'react';
import Particle from './Particle';
import Fade from 'react-reveal/Fade';

const Landing = () => {
    return (
        <div id="landing">
            <div className="home-heading">
                    <Fade bottom>
                        <h2>Hello! I'm</h2>
                    </Fade>

                    <Fade bottom delay={450}>
                        <h1>Denise Nguyen</h1>
                    </Fade>
                    
                    <Fade bottom delay={600}>
                        <hr/>
                    </Fade>

                    <Fade bottom delay={850}>
                        <h3>A Front-End Web Developer based in Vancouver, BC</h3>
                    </Fade>
                        
                    
                    
            </div>
            
            <Particle color="#BBCBDD"/>
            
        </div>
    );
}

export default Landing;

// #7ACACD
