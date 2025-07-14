const { Router } = require("express")
const { home } = require("../controllers/Home/home.controller.js")
const usuarioController = require("../controllers/API/usuario.controller.js")

const rutaHome = Router()

rutaHome.get("/", home)
rutaHome.post("/login", usuarioController.login)
rutaHome.post("/crear-usuario", usuarioController.crearUsuario)

module.exports = rutaHome
