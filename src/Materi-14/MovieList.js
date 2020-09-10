import React, { useContext } from "react"
import { MovieContext } from "./MovieContext"

const MovieList = () => {
    const [movie, setMovie, inputForm, setInputForm] = useContext(MovieContext)

    const handleDelete = (event) => {
        var idMovie = parseInt(event.target.value)
        var newMovie = movie.filter(x => x.id !== idMovie)
        setMovie([...newMovie])
    }

    const handleEdit = (event) => {
        var idMovie = parseInt(event.target.value)
        var singleMovie = movie.find(x => x.id === idMovie)
        setInputForm({ ...inputForm, name: singleMovie.name, lengthOfTime: singleMovie.lengthOfTime, id: idMovie })
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Length of Time</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>

                {movie.map((el, idx) => {
                    return (
                        <tr key={el.id}>
                            <td>{idx + 1}</td>
                            <td>{el.name} </td>
                            <td>{el.lengthOfTime} minutes </td>
                            <td>
                                <button value={el.id} style={{ marginRight: "10px" }} onClick={handleEdit}>Edit</button>
                                <button value={el.id} onClick={handleDelete}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )

}

export default MovieList
