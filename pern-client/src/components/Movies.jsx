import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Movies () {

    const [movies, setMovies] = useState([])

    





    const getData = async () => {
        await axios.get('http://localhost:3001/api/movies')
        .then(res => {
            if (res) {
                setMovies(res.data)
                console.log(res.data)
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])




    return (
        <div className="actor">
            {movies.map((value) => {
                return (
                    <div key={value.id}>
                        <h3>Movie Name: {value.movieName}</h3>
                        <h4>Actor Name: {value.actorName}</h4>
                        <p>Release Year: {value.releasedate}</p>
                        <br />
                    </div> 
                )
            })}

        </div>
    )
}