import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className="nav">
            <Link className="nav-home"to ="/">Home</Link>
            <br />
            <Link className="nav-actor"to="/actor">Actor</Link>
            <Link className="nav-movies"to="/movies">Movies</Link>
        </div>
    )
}