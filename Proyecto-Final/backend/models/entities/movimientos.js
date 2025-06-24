module.exports = (sequelize, DataTypes) => {
  const Movimiento = sequelize.define(
    "Movimiento",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tipo: {
        type: DataTypes.ENUM("ingreso", "egreso"),
        allowNull: false,
        validate: {
          isIn: [["ingreso", "egreso"]],
        },
      },
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "categorias",
          key: "id",
        },
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          isDecimal: true,
          min: 0,
        },
      },
    },
    {
      tableName: "movimientos",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  )

  return Movimiento
}


