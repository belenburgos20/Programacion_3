//Funciones para manejar las peticiones a la API

import axios from 'axios'; //para hacer peticiones http

const API_URL = 'http://localhost:3000/api'; // URLL base de la API

export const registrarUsuario = (datos) =>
  axios.post(`${API_URL}/crear-usuario`, datos);  //datos del usuario al backend

export const iniciarSesion = (datos) =>
  axios.post(`${API_URL}/login`, datos);

export const guardarIngreso = (ingreso) =>
  axios.post(`${API_URL}/ingresos`, ingreso, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}` // Agrega el token de autorización
    }
  });

export const guardarEgreso = (egreso) =>
  axios.post(`${API_URL}/egresos`, egreso, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });

export const crearMovimiento = (movimiento) =>
  axios.post(`${API_URL}/movimientos`, movimiento, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });

export const obtenerMovimientos = () =>
  axios.get(`${API_URL}/movimientos`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });

export const obtenerMovimientoPorId = (id) =>
  axios.get(`${API_URL}/movimientos/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });

export const eliminarMovimiento = (id) =>
  axios.delete(`${API_URL}/movimientos/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });

export const actualizarMovimiento = (id, movimiento) =>
  axios.put(`${API_URL}/movimientos/${id}`, movimiento, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });

export const filtrarMovimientos = (filtros) =>
  axios.post(`${API_URL}/movimientos/filtrar`, filtros);



export const obtenerCategorias = () =>
  axios.get(`${API_URL}/categorias`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}` // Agrega el token de autorización
    }
  });

export const obtenerResumen = () =>
  axios.get(`${API_URL}/resumen`);


