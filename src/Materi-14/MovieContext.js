import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movie, setMovie] = useState([
        { id: 1, name: "Harry Potter", lengthOfTime: 120 },
        { id: 2, name: "Sherlock Holmes", lengthOfTime: 125 },
        { id: 3, name: "Avengers", lengthOfTime: 130 },
        { id: 4, name: "Spiderman", lengthOfTime: 124 },
    ]);

    const [inputForm, setInputForm] = useState({
        name: "",
        lengthOfTime: 0,
        id: null
    })

    return (
        <MovieContext.Provider value={[movie, setMovie, inputForm, setInputForm]}>
            {props.children}
        </MovieContext.Provider>
    );
};