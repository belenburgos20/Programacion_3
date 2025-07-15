const { Usuario } = require("../models/index.js")

const createUsuario = async (nombre, email, password) => {
  try {
    const existingUser = await Usuario.findOne({ where: { email } })
    if (existingUser) {
      throw new Error("El email ya está registrado")
    }

    const usuario = await Usuario.create({ nombre, email, password })

    const { password: _, ...usuarioSinPassword } = usuario.toJSON()
    return usuarioSinPassword
  } catch (error) {
    throw new Error("Error al crear usuario: " + error.message)
  }
}

const login = async (email, password) => {
  try {
    const usuario = await Usuario.findOne({ where: { email } })
    if (!usuario) {
      throw new Error("usuario no registrado")
    }

    const isValidPassword = await usuario.validPassword(password)
    if (!isValidPassword) {
      throw Error("Contraseña incorrecta");

    }

    const { password: _, ...usuarioSinPassword } = usuario.toJSON()
    return usuarioSinPassword
  } catch (error) {
    throw new Error("Error en login: " + error.message)
  }
}

const findOne = (email) => {
  return Usuario.findOne({ where: { email } })
}

const obtenerUsuarioPorId = async (id) => {
  try {
    const usuario = await Usuario.findByPk(id)
    if (!usuario) {
      throw new Error("Usuario no registrado")
    }

    const { password: _, ...usuarioSinPassword } = usuario.toJSON()
    return usuarioSinPassword
  } catch (error) {
    throw new Error("Error al obtener usuario: " + error.message)
  }
}

module.exports = {
  createUsuario,
  login,
  obtenerUsuarioPorId,
  findOne
}


