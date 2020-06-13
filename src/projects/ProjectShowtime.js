import React from 'react';
import Project from '../pages/Project';
import scHome from '../images/showtime/showtime-home.png';
import scMovie from '../images/showtime/showtime-movie.png';
import scMobile from '../images/showtime/screenshots-mobile.png';
import scSearch from '../images/showtime/showtime-search.png';
import mockup from '../images/showtime/mockups/mockup.png';

const ShowtimeCode = `
    // set state
    const initalSortBy = props.sort;
    const [sort, setSort] = useState(initalSortBy);
    const [movieData, setMovieData] = useState(null);
    const [genreData, setGenreData] = useState(null);

    useEffect(() => {
        // fetch API movie
        const fetchMovies = async () =>{
            // correct syntax is $ before {}
            const res = await fetch('{API_URL_REQUEST_MOVIE}{sort}{API_KEY}{LANGUAGE}');
            const data = await res.json();
            const movieData = data;
            setMovieData(movieData.results);
        }
        
        // fetch API movie genre
        const fetchGenre = async () => {
            const res = await fetch('{API_URL_REQUEST_GENRE}');
            const data = await res.json();
            const genreData = data;
            setGenreData(genreData.genres);
        }

        fetchMovies();
        fetchGenre();
    }, [sort]);

`

const projectInfo = [
    {
        title: "Showtime",
        id: '#showtime',
        shortDesc: "A dynamic movie website for displaying movies, their ratings and synopsis. Uses The Movie DB API for fetching and displaying the movie data.",
        tags: ['React', 'Sass', 'Adobe Photoshop 2020'],
        featuredImg: mockup,
        overview: "Showtime is a dynamic movie website built with React.js and Sass. The movie web application uses The Movie DB API for fetching and displaying movie data but is not endorsed or certified by TMDb. For this project, I developed a live version based on the mockups I created using Adobe Photoshop. I implemented a search feature and a personalized favourite feature where the user can add and remove their favourite movies. The user's favourite movies are stored on their web browser’s local storage.",
        responsibilities: null,
        members: null,
        mockups: [mockup],
        colours: ['#ecc880', '#1C1C1C', '#f8f8f8'],
        screenshots: [scMobile, scHome, scSearch, scMovie],
        codeDesc: 'In this code, I used React Hooks to set variables and fetch the movie API.',
        codeSnippets: ShowtimeCode,
        liveSite: 'http://dnguyen.bcitwebdeveloper.ca/movie-app/',
        github: 'https://github.com/dnguyen19/showtime',
    }
]

const ProjectShowtime = () => {
    return (
        <Project 
            project={projectInfo}
        />
    );
}

export default ProjectShowtime;
