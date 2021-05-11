import React from 'react'

export default function AlphaBtn(props) {
    
    // Sorterar filmlistan i bokstavordning
    function sortAlpha() {
        console.log(props);
        const sorted = [...props.movies].sort((a, b) => (a.title > b.title) ? 1 : -1);
        props.setMovies(sorted)
    }
    
    return (
        <div>
            <button type="button" className="btn btn-primary mt-4 float-start" onClick={sortAlpha}>Alfabetisk ordning</button>
        </div>
    )
}



