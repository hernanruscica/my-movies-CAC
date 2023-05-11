
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, getDoc, deleteDoc, doc } from "firebase/firestore"; //doc returns a single document
import {db} from "../firebaseConfig/firebase.js";
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
const mySwal = withReactContent (Swal)

export const UserCard =  () => {             
    //console.log('userCard')
    const [users, setUsers] = useState([]);

    const getUserData = async () => {
        //referenciamos a la db de firestore
        const usersCollectionRef = collection(db, "users");
        const userDocRef = doc(usersCollectionRef, "K1jZQ8d1L3LMSmsk24tG");  
        try {
            const docSnapshot = await getDoc(userDocRef);
            if (docSnapshot.exists()) {
            const userData = docSnapshot.data();
            //console.log(userData);
            } else {
            console.log("El documento no existe");
            }
        } catch (error) {
            console.error("Error al obtener el documento:", error);
        }
    };

    /*
    const getAllUserData = async () => {
        const usersCollectionRef = collection(db, "users");
        try {
          const querySnapshot = await getDocs(usersCollectionRef);          
          querySnapshot.forEach((doc) => {
            const userData = doc.data();                       
            setUsers((user) => [...user, userData]);
          });                   
        //console.log(users)
        } catch (error) {
          console.error("Error al obtener los documentos:", error);
        }
      };
      */
      const getAllUserData = async()=>{
        const usersCollectionRef = collection(db, "users");
        const data = await getDocs(usersCollectionRef)
        setUsers(
            data.docs.map((doc)=>(({...doc.data(),id:doc.id})))
            )
            //console.log(users)
        }
        
      
     useEffect(() => {            
            getAllUserData();                  
        }, []); 
/*
    useEffect(() => {            
        console.log(users);                  
    }, [users]); 
    */
    //funcion para mostrar un documento

    //funcion para elimnar un documento

    //funcion para modal de confirmacion de eliminacion del documento       
    

    //devolvemos la vista 
    return (
        <>
        <h1>showing user Card</h1>
        
        <p>{
            (users.length !== 0) ? `name: ${users[0]['user_name']}` : ''
            //users[0]['user_name']
        }</p>        
        
        </>
    )
}