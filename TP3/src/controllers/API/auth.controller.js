const Config = require("../../config/config.js")
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
  try {
    const { email, password } = req.body

    if (email === Config.admin.user && password === Config.admin.password) {
      const payload = {
        id: "admin",
        email: email,
        role: "admin",
      }

      const token = jwt.sign(payload, Config.secretWord, { expiresIn: Config.expiresIn || "24h" })

      res.redirect(`/pacientes?token=${token}`)
    } else {
      res.redirect("/?error=credenciales_incorrectas")
    }
  } catch (error) {
    console.error("Error en login:", error)
    res.redirect("/?error=error_servidor")
  }
}

module.exports = {
  login,
}

