import React, { useState } from 'react';
import '../styles/App.css';

function App() {
  const [formData, setFormData] = useState({
    identificacion: '',
    nombres: '',
    apellidos: '',
    tipoIdentificacion: '',
    fechaNacimiento: '',
    numeroCelular: '',
    correoElectronico: ''
  });

  const [clientes, setClientes] = useState([]); // Estado local para almacenar usuarios
  const [editIndex, setEditIndex] = useState(null); // Índice para edición

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Editar cliente existente
      const updatedClientes = clientes.map((cliente, index) =>
        index === editIndex ? formData : cliente
      );
      setClientes(updatedClientes);
      setEditIndex(null); // Salir del modo edición
    } else {
      // Agregar nuevo cliente
      setClientes([...clientes, formData]);
    }
    setFormData({  // Limpiar formulario
      identificacion: '',
      nombres: '',
      apellidos: '',
      tipoIdentificacion: '',
      fechaNacimiento: '',
      numeroCelular: '',
      correoElectronico: ''
    });
  };

  const handleEdit = (index) => {
    setFormData(clientes[index]); // Cargar datos en el formulario
    setEditIndex(index); // Guardar índice en edición
  };

  const handleDelete = (index) => {
    const updatedClientes = clientes.filter((_, i) => i !== index); // Eliminar cliente
    setClientes(updatedClientes);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit} className="form-container">
        <input name="nombres" placeholder="Nombres" value={formData.nombres} onChange={handleChange} required />
        <input name="apellidos" placeholder="Apellidos" value={formData.apellidos} onChange={handleChange} required />
        <select name="tipoIdentificacion" onChange={handleChange} required>
        <option value="">Seleccione Tipo de Identificación</option>
        <option value="CC">Cédula de Ciudadanía</option>
        <option value="TI">Tarjeta de Identidad</option>
        <option value="CE">Cédula de Extranjería</option>
        <option value="Pasaporte">Pasaporte</option>
        <option value="NIT">NIT</option>
        </select>
        <input name="identificacion" placeholder="Identificación" value={formData.identificacion} onChange={handleChange} required />
        <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
        <input name="numeroCelular" placeholder="Número Celular" value={formData.numeroCelular} onChange={handleChange} required />
        <input name="correoElectronico" placeholder="Correo Electrónico" value={formData.correoElectronico} onChange={handleChange} required />
        <button type="submit">{editIndex !== null ? "Actualizar Cliente" : "Registrar Cliente"}</button>
      </form>

      {/* Tabla dinámica */}
      <table className="clients-table">
        <thead>
          <tr>
            <th>Identificación</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Tipo ID</th>
            <th>Fecha Nacimiento</th>
            <th>Celular</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente, index) => (
            <tr key={index}>
              <td>{cliente.identificacion}</td>
              <td>{cliente.nombres}</td>
              <td>{cliente.apellidos}</td>
              <td>{cliente.tipoIdentificacion}</td>
              <td>{cliente.fechaNacimiento}</td>
              <td>{cliente.numeroCelular}</td>
              <td>{cliente.correoElectronico}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Editar</button>
                <button onClick={() => handleDelete(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
