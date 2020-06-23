import React, {useEffect} from 'react';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import NavMenu from '../components/NavMenu';
import imgShowtime from '../images/showtime/mockups/mockup.png';
import imgPortfolio from '../images/portfolio/mockups-portfolio.png';
import imgFitness from '../images/myfitplanner/myfitplanner.png';
import imgGame from '../images/space-match/mockups-game.png';
import imgCodium from '../images/codium/mockups-codium.png';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

    }, []);

      
    return (
        <div className="home">
                <NavMenu/>
            <div className="page">
               <Landing/>
                <div className="content">
                    <Projects/>
                    <About/>
                </div>
                <Contact/>
                <Footer/> 
            </div>

            <div className="preload">
                <img src={imgPortfolio} alt="preload portfolio mockup" />
                <img src={imgShowtime} alt="preload showtime mockup"/>
                <img src={imgGame} alt="preload game mockup"/>
                <img src={imgFitness} alt="preload fitness app mockup"/>
                <img src={imgCodium} alt="preload codium mockup"/>
            </div>
            
        </div>
    );
}

export default Home;
