import {Link} from "react-router-dom";

export const MoviesNavigation = () => {
    return (
        <>
            <p>MoviesNavigation Component</p>
            <Link to = '/'>Main</Link> --
            <Link to = '/movies'>Movies</Link> --
            <Link to = '/user'>User</Link>            
        </>
    )
}