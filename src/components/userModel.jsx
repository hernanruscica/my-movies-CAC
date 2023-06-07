import { collection, getDocs, getDoc, deleteDoc, doc } from "firebase/firestore"; //doc returns a single document
import {db} from "../firebaseConfig/firebase.js";

export const getUserData = async () => {
    //referenciamos a la db de firestore
    const usersCollectionRef = collection(db, "users");
    const userDocRef = doc(usersCollectionRef, "K1jZQ8d1L3LMSmsk24tG");  
    try {
        const docSnapshot = await getDoc(userDocRef);
        if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        //console.log(userData);
        return userData;
        } else {
        console.log("El documento no existe");
        }
    } catch (error) {
        console.error("Error al obtener el documento:", error);
    }
};

export const getAllUserData = async()=>{
    const usersCollectionRef = collection(db, "users");
    const data = await getDocs(usersCollectionRef)
    const usersData = data.docs.map((doc)=>(({...doc.data(),id:doc.id})));    
    //const usersData = [{user_name:"hernan"}];
    console.log(usersData);
    return usersData;        
    };