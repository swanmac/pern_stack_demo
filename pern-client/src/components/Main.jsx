import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Actor from './Actor'
import Movies from './Movies'

export default function Main () {
    return (
        <div>
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/actor" element = {<Actor />} />
                <Route path = "/movies" element = {<Movies />} />
            </Routes>
        </div>
    )
}