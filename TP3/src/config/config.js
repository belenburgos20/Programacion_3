const  dotenv = require('dotenv');
dotenv.config()
class Config {
    constructor(){
        //TODO: verificar que existean las constantes del .env
        if (!process.env.SECRET_WORD || !process.env.EXPIRES_IN) {
            throw new Error("Faltan variables de entorno requeridas: SECRET_WORD o EXPIRES_IN");
        }
        
        this.secretWord = process.env.SECRET_WORD;
        this.expiresIn = process.env.EXPIRES_IN;

    }
}
module.exports = new Config();