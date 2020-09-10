import React, { useState, useContext } from "react"
import { MovieContext } from "./MovieContext"

const MovieForm = () => {
    const [movie, setMovie, inputForm, setInputForm] = useContext(MovieContext)


    const handleSubmit = (event) => {
        event.preventDefault()
        var newId = movie.length + 1
        if (inputForm.id === null) {
            setMovie([...movie, { name: inputForm.name, lengthOfTime: inputForm.lengthOfTime, id: newId }])
        } else {
            var singleMovie = movie.find(x => x.id === inputForm.id)
            singleMovie.name = inputForm.name
            singleMovie.lengthOfTime = inputForm.lengthOfTime
            setMovie([...movie])
        }
        setInputForm({ name: "", lengthOfTime: 0, id: null })
    }


    const handleChangeName = (event) => {
        setInputForm({ ...inputForm, name: event.target.value })
    }

    const handleChangeTime = (event) => {
        setInputForm({ ...inputForm, lengthOfTime: event.target.value })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <strong>Name of Movie : </strong><input type="text" value={inputForm.name} onChange={handleChangeName} /><br />
                <strong>Length of Movie : </strong><input type="number" value={inputForm.lengthOfTime} onChange={handleChangeTime} />
                <br />
                <button>submit</button>
            </form>
        </>
    )

}

export default MovieForm
