const dotenv = require("dotenv")
dotenv.config()

class Config {
  constructor() {
    if (!process.env.SECRET_WORD || !process.env.EXPIRES_IN) {
      throw new Error("Faltan variables de entorno requeridas")
    }

    this.secretWord = process.env.SECRET_WORD
    this.expiresIn = process.env.EXPIRES_IN

    this.admin = {
      user: process.env.ADMIN_EMAIL || "admin@gmail.com",
      password: process.env.ADMIN_PASSWORD || "Admin2345",
    }
  }
}

module.exports = new Config()