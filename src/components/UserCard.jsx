export const UserCard = (props) => {       
    
    const user = props.user;
    console.log(user.userName);

    return (
        <>
        <h1>showing user Card</h1>
        <p>{`name: ${user.userName}`}</p>        
        </>
    )
}