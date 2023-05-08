import "./generalStyles.css";
import {UserCard} from "../components/UserCard";
export const UserMain = () => {

    //This should came from the firestore db
    const user = {
        userName: 'pepe', 
        id: 1, 
        email: 'pepe@yahoo.com', 
        password: '1234'};
    return (
        <>
            <main className="container">
                <h1>UserMain Component</h1>
                <UserCard user={user}></UserCard>
            </main>            
        </>
    )
}