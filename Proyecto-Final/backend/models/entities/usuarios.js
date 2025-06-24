const bcrypt = require("bcryptjs")

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [2, 100],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [6, 255],
        },
      },
    },
    {
      tableName: "usuarios",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      hooks: {
        beforeCreate: async (usuario) => {
          if (usuario.password) {
            usuario.password = await bcrypt.hash(usuario.password, 10)
          }
        },
        beforeUpdate: async (usuario) => {
          if (usuario.changed("password")) {
            usuario.password = await bcrypt.hash(usuario.password, 10)
          }
        },
      },
    },
  )

  Usuario.prototype.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
  }

  return Usuario
}
