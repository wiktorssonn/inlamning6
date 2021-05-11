import React, { useRef, useState } from 'react';
import Movies from './Movies';
import AlphaBtn from './AlphaBtn';
import GradeBtn from './GradeBtn';
import SaveMovie from './SaveMovie';

export default function MovieForm() {
    // movies kommer vara själva datan och setMovies är där man kan uppdatera
    // den datan som finns
    const [movies, setMovies] = useState([]);

    // Variabler för värdet i input-fälten
    const titleRef = useRef();
    const gradeRef = useRef();
    
    return (
        <div>
            <h4 className="mt-3"> Lägg till en film </h4>
            <hr />
            <form>
                <label for="id" className="mt-3">
                    <strong>Titel:</strong>
                </label>
                <input className="form-control" id="title" ref={titleRef} placeholder="Lägg till film..." />

                <label for="grade" className="mt-3">
                    <strong>Betyg:</strong>
                </label>
                <select className="form-select" id="grade" ref={gradeRef}>
                    <option>Ange betyg..</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <SaveMovie movies={movies} setMovies={setMovies} titleRef={titleRef} gradeRef={gradeRef}/>
            </form>

            <h3 className="mt-4">Filmer i listan</h3>
            { movies.map(movie => <Movies movies={movies} setMovies={setMovies} movie={movie} />) }
            
            <AlphaBtn movies={movies} setMovies={setMovies}/>  
            <GradeBtn movies={movies} setMovies={setMovies}/>
        </div>
    )
}
