
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"; //doc returns a single document
import {db} from "../firebaseConfig/firebase.js";
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
const mySwal = withReactContent (Swal)

export const UserCard = (props) => {   
    
    //configurar los hooks
    const [users, setUsers] = useState([])    

    //referenciamos a la db de firestore
    const usersCollection = collection(db, "users");

    //funcion para mostrar un documento

    //funcion para elimnar un documento

    //funcion para modal de confirmacion de eliminacion del documento

    //useEffect
    
    const userTest = props.user;
    console.log(userTest.userName);

    //devolvemos la vista 
    return (
        <>
        <h1>showing user Card</h1>
        <p>{`name: ${userTest.userName}`}</p>        
        </>
    )
}