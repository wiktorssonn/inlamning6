import React from 'react'

export default function SaveMovie(props) {
    
    // Funktion för att lägga till en ny film i listan
    function addMovie() {
        // Kontrollerar att man angivit titel och betyg
        if (props.titleRef.current.value > "" && (props.gradeRef.current.value) > 0) {
            // Ta den ursprungliga listan, det som kommer efter kommat är 
            // det som kommer läggas till i listan

            props.setMovies([...props.movies, {
                title: props.titleRef.current.value,
                grade: props.gradeRef.current.value
            }]);

            // Återställer formuläret när film har lagts till
            props.titleRef.current.value = "";
            props.gradeRef.current.value = "Ange betyg..";

        } else {
            alert("Du måste ange en titel och ett betyg!");
        }
    }       
    
    return (
        <div>
            <button type="button" id="save-movie" className="btn btn-success mt-4" onClick={addMovie}>Spara film</button>
        </div>
    )
}
