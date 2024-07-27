import './App.css';
import {useEffect, useState} from "react";
import searchIcon from './search.svg'
import MovieCard from "./MovieCard";

const API_URL = 'https://www.omdbapi.com/?apikey="add-your-api-key-here"';

function App() {

    const [moviesvar, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies()
    }, [])

    return (
        <div className="app">
            <h1>MovieVerse</h1>
            <div className="search">
                <input type="text" placeholder="Enter the movie name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <img src={searchIcon} alt="search-icon" onClick={() =>searchMovies( searchTerm)}/>
            </div>

            {moviesvar?.length > 0 ? (
                <div className="container">
                    {
                        moviesvar.map((movie) =>
                            <MovieCard movie={movie}/>)
                    }
                </div>) : (
                <div className="empty">
                    No movies found
                </div>
            )
            }
        </div>
    );
}

export default App;
