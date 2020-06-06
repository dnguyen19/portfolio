import React, {useState, useEffect} from 'react';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import NavMenu from '../components/NavMenu';

const Home = (props) => {

    // first set to 0, then set it to scroll position
    const initialPosition = props.position;
    const [scrollPosition, setSrollPosition] = useState(initialPosition);

    useEffect(() => {
        
        window.scrollTo(0, scrollPosition);

    }, [scrollPosition]);


    const handleNewPosition = (position) => {
        setSrollPosition(position);
        console.log(position);
        console.log(scrollPosition);
    }

      
    return (
        <div className="home">
                <NavMenu/>
            
            <div className="page">
               <Landing/>
                <div className="content">
                    <Projects handlePosition={handleNewPosition}/>
                    <About/>
                </div>
                <Contact/>
                <Footer/> 
            </div>
            
        </div>
    );
}

Home.defaultProps = {
    position: 10
}

export default Home;
