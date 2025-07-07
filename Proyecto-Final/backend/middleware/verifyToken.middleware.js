const jwt = require("jsonwebtoken")
const config = require('../config/config.js')

const verifyTokenMiddleware = (req, res, next) => {
  const authHeader = req.header("authorization")

  if (!authHeader) {
    return res.status(401).json({
      error: "Token de acceso no proporcionado",
      message: "Se requiere autenticación para acceder a este recurso",
    })
  }

  const token = authHeader.split(" ")[1]

  if (!token) {
    return res.status(401).json({
      error: "Formato de token inválido",
      message: "El token debe tener el formato: Bearer <token>",
    })
  }

  try {
    const decoded = jwt.verify(token, config.secretWord)
    req.user = decoded
    next()
  } catch (error) {
    let message = "Token inválido"

    if (error.name === "TokenExpiredError") {
      message = "Token expirado"
    } else if (error.name === "JsonWebTokenError") {
      message = "Token malformado"
    }

    return res.status(401).json({
      error: message,
      message: "Por favor, inicia sesión nuevamente",
    })
  }
}

module.exports = {
  verifyTokenMiddleware,
}
