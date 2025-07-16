module.exports = {
  async up(queryInterface, Sequelize) {
    console.log("Ejecutando seeder")
    await queryInterface.bulkInsert(
      "usuarios",
      [
        {
          id: 1,
          nombre: "Administrador",
          email: "administrador@test.com",
          password: "123456",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    )
    await queryInterface.bulkInsert(
      "categorias",
      [
        {
          id: 1,
          nombre: "Alimentación",
          descripcion: "Gastos en comida y bebidas",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          nombre: "Transporte",
          descripcion: "Gastos en transporte y combustible",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          nombre: "Entretenimiento",
          descripcion: "Gastos en ocio y diversión",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          nombre: "Servicios",
          descripcion: "Gastos en servicios básicos",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          nombre: "Salario",
          descripcion: "Ingresos por trabajo",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    )
    await queryInterface.bulkInsert(
      "movimientos",
      [
        {
          id: 1,
          tipo: "ingreso",
          fecha: "2024-01-01",
          id_categoria: 5,
          descripcion: "Salario enero",
          total: 2500.0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          tipo: "egreso",
          fecha: "2024-01-02",
          id_categoria: 1,
          descripcion: "Supermercado semanal",
          total: 85.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          tipo: "egreso",
          fecha: "2024-01-03",
          id_categoria: 2,
          descripcion: "Combustible",
          total: 45.0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          tipo: "egreso",
          fecha: "2024-01-05",
          id_categoria: 4,
          descripcion: "Factura de luz",
          total: 120.75,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          tipo: "egreso",
          fecha: "2024-01-07",
          id_categoria: 3,
          descripcion: "Cine con familia",
          total: 32.0,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    )

    await queryInterface.sequelize.query("SELECT setval('usuarios_id_seq', 1, true);")
    await queryInterface.sequelize.query("SELECT setval('categorias_id_seq', 5, true);")
    await queryInterface.sequelize.query("SELECT setval('movimientos_id_seq', 5, true);")

    console.log("Seeder Admin completado:")
    console.log("   - 1 usuario: Administrador")
    console.log("   - 5 categorías")
    console.log("   - 5 movimientos")
  },

  async down(queryInterface, Sequelize) {
    console.log("Revirtiendo seeder Admin...")
    await queryInterface.bulkDelete("movimientos", { usuario_id: 1 }, {})
    await queryInterface.bulkDelete("categorias", { usuario_id: 1 }, {})
    await queryInterface.bulkDelete("usuarios", { id: 1 }, {})
    console.log("Datos del Administrador eliminados");
  },
}