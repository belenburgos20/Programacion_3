const { Usuario } = require("./index")

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
      throw new Error("Usuario no encontrado")
    }

    const isValidPassword = await usuario.validPassword(password)
    if (!isValidPassword) {
      throw new Error("Contraseña incorrecta")
    }

    const { password: _, ...usuarioSinPassword } = usuario.toJSON()
    return usuarioSinPassword
  } catch (error) {
    throw new Error("Error en login: " + error.message)
  }
}

const obtenerUsuarioPorId = async (id) => {
  try {
    const usuario = await Usuario.findByPk(id)
    if (!usuario) {
      throw new Error("Usuario no encontrado")
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
}


