import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Actor () {

    const [actor, setActor] = useState([])

    





    const getData = async () => {
        await axios.get('http://localhost:3001/api/actor')
        .then(res => {
            if (res) {
                setActor(res.data)
                console.log(res.data)
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])




    return (
        <div className="actor">
            {actor.map((value) => {
                return (
                    <div key={value.id}>
                        <h3>First Name: {value.firstName}</h3>
                        <h3>Last Name: {value.lastName}</h3>
                        <p>Genre: {value.genre}</p>
                        <p>Number of Movies: {value.numberOfMovies}</p>
                        <br />
                    </div> 
                )
            })}

        </div>
    )
}