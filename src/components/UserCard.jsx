
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, getDoc, deleteDoc, doc } from "firebase/firestore"; //doc returns a single document
import {db} from "../firebaseConfig/firebase.js";
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const mySwal = withReactContent (Swal)

export const UserCard =  (id) => {             
    console.log('userCard', id)
    //let currentId = (!id) ? id : "K1jZQ8d1L3LMSmsk24tG";
    const [user, setUser] = useState([]);

    const getUserData = async (id) => {
        //referenciamos a la db de firestore
        const usersCollectionRef = collection(db, "users");
        const userDocRef = doc(usersCollectionRef, id);  
        try {
            const docSnapshot = await getDoc(userDocRef);
            if (docSnapshot.exists()) {
            const userData = {...docSnapshot.data(), id: id};
            //console.log(docSnapshot.data())
            setUser(
                userData
            )
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
        setUser(
            data.docs.map((doc)=>(({...doc.data(),id:doc.id})))
            )            
        }        
      
     useEffect((id) => {            
        getUserData(id)
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
            //(user.length !== 0) ? `name: ${user.user_name} id: ${user.id} pass: ${user.password}` : ''
            //users[0]['user_name']
            user
        }</p>        
        
        </>
    )
}