// api/userApi.js


//https://apiabmusers.cyclic.cloud/
//https://vicionando-series-2-api.onrender.com/ 
//http://localhost:3001

const API_BASE_URL = 'http://localhost:3001'; // Reemplaza con la URL de tu API

export const GetUsers = () =>{
  let path = '/api/users/';
  let data = fetch (API_BASE_URL + path,{
      headers:{
          Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIxLCJpYXQiOjE2OTUzMDQxMDAsImV4cCI6MTY5NTM5MDUwMH0.pbXbsnblmVXDw90p1p7dXlTxhOBpsFaZTxLDQSLycTQ",
          "Content-Type":"application/json;charset=utf-8"          
      }
  }).then((results)=>{
      console.log("resultados dentro de GetUsers ", results.json());
      return results.json();      
    });    
    return data;
  }    

export const CreateUser = async (userData) => {
  let path = "/api/users/register"
  try {
    const response = await fetch(API_BASE_URL + path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Ajusta el tipo de contenido según tus necesidades
      },
      body: JSON.stringify(userData),
    });
    
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw error;
  }
};

export const AuthenticateUser = async (userData) => {
  let path = "/api/users/authenticate";
  const BDuserdata = {
    username : userData.userName,
    password : userData.password
  }
    try {
      const response = await fetch(API_BASE_URL + path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Ajusta el tipo de contenido según tus necesidades
        },
        body: JSON.stringify(BDuserdata),
      });
      
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw error;
    }
  };

// Agrega más funciones para actualizar, eliminar, obtener usuarios, etc.
