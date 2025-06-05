const jwt = require("jsonwebtoken")
const Config = require("../../config/config.js")

const mockUser = {
  id: 1,
  email: "admin@clinica.com",
  password: "admin123",
}

exports.login = (req, res) => {
  const { email, password } = req.body

  if (email === mockUser.email && password === mockUser.password) {
    const token = jwt.sign({ id: mockUser.id, email: mockUser.email }, Config.secretWord, {
      expiresIn: Config.expiresIn,
    })

    res.json({ token })
  } else {
    res.status(401).json({ mensaje: "Credenciales incorrectas" })
  }
}