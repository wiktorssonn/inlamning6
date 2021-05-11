import React from 'react';
import './style.css';

export default function Movies(props) {
    // Loopar igenom antalet stjärnor
    let stars = [];
    for (let i = 0; i < props.movie.grade; i++) {
        stars.push(<img src="images/star.png" alt="star" key={i} />)
    }

    // Tar bort filmen som man klickar på (krysset)
    function deleteMovie(title) {
        props.setMovies(props.movies.filter((movie) => movie.title !== title));
    }
    
    // Returnerar listan med filmerna
    return (
        <li className="list-group-item mt-2 rounded border-2">
            {props.movie.title}
            <img src="images/delete.png" alt="delete" className="ms-3" onClick={() => {deleteMovie(props.movie.title)}} />
            {stars}
        </li>
    )
}
