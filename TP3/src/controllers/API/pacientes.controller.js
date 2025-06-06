const pacientesModel = require("./../../models/mock/pacientes.models.js");
const Paciente = require("./../../models/mock/entities/paciente.entity.js");
const jwt = require("jsonwebtoken");
const Config = require("../../config/config.js");


class PacientesController {
  async login(req, res) {
    //recolecto credenciales
    try {
      const { email, password } = req.body;

      const paciente = await pacientesModel.validate(email, password);

      if (!paciente) {
        return res.status(401).json({ message: "Email o contraseña incorrectos" });
      }
      const payload = {
        id: paciente.id,
        email: paciente.email,
        nombre: paciente.nombre
      };

      const token = jwt.sign(payload, Config.secretWord, { expiresIn: "1h" });

      // Devolver token
      res.status(200).json({ token });

    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async list(req, res) {
    res.status(200).json(await pacientesModel.list());
  }
  async create(req, res) {
    const { dni, nombre, apellido, email } = req.body;

    const nuevoPaciente = new Paciente(dni, nombre, apellido, email);

    const info = await pacientesModel.create(nuevoPaciente);
    res.status(200).json(info);
  }
  delete(req, res) {
    const id = req.params.id;

    const pacienteBorrado = pacientesModel.delete(id);
    pacienteBorrado.then(paciente => {
      res.status(200).json(paciente);
    }).catch(
      error => {
        res.status(404).json({ message: `no existe el paciente conh el id:${id}`, error })
      }

    );

  }
  update(req, res) {
    const id = req.params.id;
    const { dni, nombre, apellido, email } = req.body;
    const nuevoPaciente = new Paciente(dni, nombre, apellido, email);
    pacientesModel.update(id, nuevoPaciente);
    res.status(200).json({ message: "actualizado" });
  }
}

module.exports = new PacientesController();