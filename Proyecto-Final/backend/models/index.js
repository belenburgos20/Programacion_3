const { Sequelize } = require("sequelize")
const config = require("../config/config")

const env = process.env.NODE_ENV || "development"
const dbConfig = config[env]

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  logging: dbConfig.logging,
  pool: dbConfig.pool,
  dialectOptions: dbConfig.dialectOptions,
})

const Categoria = require("./entities/categorias")
const Movimiento = require("./entities/movimientos")
const Usuario = require("./entities/usuarios")

const models = {
  Categoria: Categoria(sequelize, Sequelize.DataTypes),
  Movimiento: Movimiento(sequelize, Sequelize.DataTypes),
  Usuario: Usuario(sequelize, Sequelize.DataTypes),
}

models.Categoria.hasMany(models.Movimiento, {
  foreignKey: "id_categoria",
  as: "movimientos",
})

models.Movimiento.belongsTo(models.Categoria, {
  foreignKey: "id_categoria",
  as: "categoria",
})

module.exports = {
  sequelize,
  Sequelize,
  ...models,
}