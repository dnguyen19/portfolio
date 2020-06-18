import React from 'react';
import Thumbnail from './Thumbnail';
import ShowtimeImg from '../images/showtime/showtime-thumbnail.png';
import SpaceMatchImg from '../images/space-match/space-match-splash.png';
import MyFitPlannerImg from '../images/myfitplanner/myfitplanner.png';
import PortfolioImg from '../images/portfolio/portfolio-thumbnail.png';
import CodiumImg from '../images/codium/codium-home.png';
import Fade from 'react-reveal/Fade';


const myProjects = [
    
    {
        title:"Showtime" ,
        tags: ['React', 'Sass', 'Photoshop'],
        desc:"A dynamic movie website for displaying movies, their ratings and synopsis. Uses The Movie DB API for fetching and displaying the movie data.",
        featImg: ShowtimeImg,
        link:"/showtime"
    },
    {
        title:"Codium",
        tags: ['WordPress', 'PHP', 'Sass'],
        desc:"An online coding school website that sells online courses that teach various coding languages. The website is built for educational purposes only (not legitimate).",
        featImg: CodiumImg,
        link:"/codium"
    },
    {
        title:"Space Match" ,
        tags: ['JavaScript', 'HTML/CSS'],
        desc:"A simple space-themed matching game that records and gives you a score based on your time.",
        featImg: SpaceMatchImg,
        link:"/space-match"
    },
    {
        title: "Portfolio",
        tags: ['React', 'Sass'],
        desc: "A web portfolio showcasing my featured projects for my progress as a web developer.",
        featImg: PortfolioImg,
        link: "/portfolio"
    },
    {
        title:"MyFitPlanner" ,
        tags: ['React Native', 'Firebase'],
        desc:"A mobile application that lets you plan out your workouts. Includes a login system, create workout logs, and GPS to locate the nearest gym around you.",
        featImg: MyFitPlannerImg,
        link:"/myfitplanner"
    }

]

const Projects = (props) => {
    return (
        <div id="projects">
            <Fade bottom>
                <h1>Projects</h1>
                <hr/>
            </Fade>
            
            <Thumbnail 
               projects={myProjects}
            />
                
        </div>
    );
}

export default Projects;

