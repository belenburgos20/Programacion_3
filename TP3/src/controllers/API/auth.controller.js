const Config = require("../../config/config.js")

const login = async (req, res) => {
  try {
    const { email, password } = req.body

    if (email === Config.admin.user && password === Config.admin.password) {
      res.redirect("/pacientes")
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
