const jwt = require("jsonwebtoken")
const Config = require("../../config/config.js")

const mockUser = {
  id: 1,
  email: Config.admin.user,
  password: Config.admin.password,
}

exports.login = (req, res) => {
  const { email, password } = req.body

  console.log("Credenciales recibidas:", { email, password })
  console.log("Credenciales esperadas:", { email: mockUser.email, password: mockUser.password })

  if (email === mockUser.email && password === mockUser.password) {
    const token = jwt.sign({ id: mockUser.id, email: mockUser.email }, Config.secretWord, {
      expiresIn: Config.expiresIn,
    })

    res.json({ token, message: "Login exitoso" })
  } else {
    res.status(401).json({ mensaje: "Credenciales incorrectas" })
  }
}
