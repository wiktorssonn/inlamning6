import React from 'react'

export default function GradeBtn(props) {

    // Sorterar filmlistan efter betyg
    function sortGrade() {
        const gradeSorted = [...props.movies].sort((a, b) => (a.grade > b.grade ? -1 : 1))
        props.setMovies(gradeSorted)
    }
    
    return (
        <div>
            <button type="button" className="btn btn-primary mx-2 mt-4" onClick={sortGrade}>Betygsordning</button>
        </div>
    )
}
