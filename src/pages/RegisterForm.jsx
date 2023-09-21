import "./generalStyles.css";
//import {UserCard} from "../components/UserCard";
import React, { useState } from 'react';
import {CreateUser} from '../utils/UserAPI';

export const RegisterForm = () => {      
    
  
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        photos_id: null,
        real_name: '',
        birthday: '',
      });
    
      const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        real_name: '',
        birthday: '',
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
        if (!formData.name) {
          validationErrors.name = 'El nombre es obligatorio';
        }
        if (!formData.email) {
          validationErrors.email = 'El email es obligatorio';
        }
        if (!formData.password) {
          validationErrors.password = 'La contraseña es obligatoria';
        }
        if (formData.password !== formData.confirmPassword) {
          validationErrors.confirmPassword = 'Las contraseñas no coinciden';
        }
        if (!formData.real_name) {
          validationErrors.real_name = 'El nombre real es obligatorio';
        }
        if (!formData.birthday) {
          validationErrors.birthday = 'La fecha de nacimiento es obligatoria';
        }
    
        // Si hay errores, actualiza el estado de errores y no envíes el formulario
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
            
        // Si no hay errores, puedes continuar con el envío del formulario y la inserción en la base de datos
        delete formData.confirmPassword;
        console.log('Datos del formulario:', formData);
        //CreateUser(formData); 
        try {
            // Enviar datos a la API
            const newUser = await CreateUser(formData);
            console.log('Nuevo usuario creado:', newUser);
        
            // Puedes redirigir al usuario a otra página o mostrar un mensaje de éxito aquí.
          } catch (error) {
            console.error('Error al crear el usuario:', error);
            // Maneja errores aquí, muestra un mensaje de error, etc.
          }
      };
    
      return (
        <div className="container">
          <h2>Registro de Usuario</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre:</label>
              <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label>Contraseña:</label>
              <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} />
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </div>
            <div className="form-group">
              <label>Confirmar Contraseña:</label>
              <input type="password" className="form-control" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
              {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
            </div>
            <div className="form-group">
              <label>Foto:</label>
              <input type="file" className="form-control-file" name="photos_id" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Nombre Real:</label>
              <input type="text" className="form-control" name="real_name" value={formData.real_name} onChange={handleChange} />
              {errors.real_name && <div className="text-danger">{errors.real_name}</div>}
            </div>
            <div className="form-group">
              <label>Fecha de Nacimiento:</label>
              <input type="date" className="form-control" name="birthday" value={formData.birthday} onChange={handleChange} />
              {errors.birthday && <div className="text-danger">{errors.birthday}</div>}
            </div>
            <button type="submit" className="btn btn-primary">Registrar</button>
          </form>
        </div>
      );
    
};


