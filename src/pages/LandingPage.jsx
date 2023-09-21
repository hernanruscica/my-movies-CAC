import {Link} from "react-router-dom";
import "./generalStyles.css";
export const LandingPage = () => {
    return(
        <>
            <main className="container">
                <h1>Welcome to "My Movies CAC"</h1>
                <p>In this app you can find movies information.</p>            
                <p>                
                <Link to = '/loginform'>Enter </Link> with your user. If you dont have a user, just
                <Link to = '/registerform'> register </Link> a new user for free !
                </p>
            </main>
        </>
    )
}