import React, {useEffect} from 'react';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import NavMenu from '../components/NavMenu';

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
            
        </div>
    );
}

export default Home;
