const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '..', 'clinica.sqlite'),
  logging: false
});

const connectDB = async () => {
  try {

    const {Paciente} = require('../sqlite/entities/paciente.entity.js');
    const {Turno} = require('../sqlite/entities/turno.entity.js');

    Paciente.hasMany(Turno, { foreignKey: 'pacienteId', as: 'turnos' });
    Turno.belongsTo(Paciente, { foreignKey: 'pacienteId', as: 'paciente' });

    await sequelize.sync();
    console.log('Base de datos conectada.');
  } catch (error) {
    console.error('Error conectando a la base de datos:', error);
  }
};

module.exports = { sequelize, connectDB };