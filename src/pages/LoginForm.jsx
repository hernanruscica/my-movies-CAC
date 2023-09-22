import "./generalStyles.css";
//import {UserCard} from "../components/UserCard";
import React, { useState } from 'react';
import {AuthenticateUser} from '../utils/UserAPI';

export const LoginForm = () => {     
    
  
    const [formData, setFormData] = useState({
        userName: '',        
        password: '',        
      });
    
      const [errors, setErrors] = useState({
        userName: '',        
        password: '',
        
      });
    
      const handleChange = (e) => {
        const { name, value, type, files } = e.target;
    
        if (type === 'file') {
          setFormData({
            ...formData,
            [name]: files[0],
          });
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validar campos
        const validationErrors = {};
        if (!formData.userName) {
          validationErrors.userName = 'El nombre es obligatorio';
        }
        
        if (!formData.password) {
          validationErrors.password = 'La contraseña es obligatoria';
        }        
    
        // Si hay errores, actualiza el estado de errores y no envíes el formulario
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
            
        // Si no hay errores, puedes continuar con el envío del formulario y la autenticacion del usuario, previa consulta a la BD        
        console.log('Datos del formulario:', formData);        
         try {
             // Enviar datos a la API
             const authenticatedUser = await AuthenticateUser(formData);
             console.log('resultado del autenticado:', authenticatedUser);        
             // Puedes redirigir al usuario a otra página o mostrar un mensaje de éxito aquí.
           } catch (error) {
            console.error('Error al autenticar el usuario:', error);
            // Maneja errores aquí, muestra un mensaje de error, etc.
           }
      };
    
      return (
        <div className="container">
          <h2>Ingreso de Usuario</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre:</label>
              <input type="text" className="form-control" name="userName" value={formData.userName} onChange={handleChange} />
              {errors.userName && <div className="text-danger">{errors.userName}</div>}
            </div> 
            
            <div className="form-group">
              <label>Contraseña:</label>
              <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} />
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </div>
            
            <button type="submit" className="btn btn-primary">Ingresar</button>
          </form>
        </div>
      );
    
};


