const { Router } = require("express")
const { home } = require("../controllers/home/home.controller.js")
const authController = require("../controllers/API/auth.controller.js")

const rutaHome = Router()

rutaHome.get("/", home)
rutaHome.post("/login", authController.login)

module.exports = rutaHome


