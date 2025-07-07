const { Movimiento, Categoria } = require("../models/index.js")
const { Op } = require("sequelize")

const list = async () => {
  try {
    return await Movimiento.findAll({
      include: [
        {
          model: Categoria,
          as: "categoria",
          attributes: ["id", "nombre"],
        },
      ],
      order: [
        ["fecha", "DESC"],
        ["created_at", "DESC"],
      ],
    })
  } catch (error) {
    throw new Error("Error al listar movimientos: " + error.message)
  }
}

const create = async (tipo, fecha, id_categoria, descripcion, total) => {
  try {
    // Verificar que la categoría existe
    const categoria = await Categoria.findByPk(id_categoria)
    if (!categoria) {
      throw new Error("La categoría especificada no existe")
    }

    return await Movimiento.create({
      tipo,
      fecha,
      id_categoria,
      descripcion,
      total,
    })
  } catch (error) {
    throw new Error("Error al crear movimiento: " + error.message)
  }
}

const update = async (id, tipo, fecha, id_categoria, descripcion, total) => {
  try {
    const movimiento = await Movimiento.findByPk(id)
    if (!movimiento) {
      throw new Error("Movimiento no encontrado")
    }

    // Verificar que la categoría existe si se está cambiando
    if (id_categoria && id_categoria !== movimiento.id_categoria) {
      const categoria = await Categoria.findByPk(id_categoria)
      if (!categoria) {
        throw new Error("La categoría especificada no existe")
      }
    }

    await movimiento.update({
      tipo,
      fecha,
      id_categoria,
      descripcion,
      total,
    })

    return movimiento
  } catch (error) {
    throw new Error("Error al actualizar movimiento: " + error.message)
  }
}

const remove = async (id) => {
  try {
    const movimiento = await Movimiento.findByPk(id)
    if (!movimiento) {
      throw new Error("Movimiento no encontrado")
    }

    await movimiento.destroy()
    return true
  } catch (error) {
    throw new Error("Error al eliminar movimiento: " + error.message)
  }
}

const getMovimientoPorId = async (id) => {
  try {
    const movimiento = await Movimiento.findByPk(id, {
      include: [
        {
          model: Categoria,
          as: "categoria",
          attributes: ["id", "nombre"],
        },
      ],
    })

    if (!movimiento) {
      throw new Error("Movimiento no encontrado")
    }

    return movimiento
  } catch (error) {
    throw new Error("Error al obtener movimiento: " + error.message)
  }
}

const getMovimientoPorFecha = async (fecha) => {
  try {
    return await Movimiento.findAll({
      where: { fecha },
      include: [
        {
          model: Categoria,
          as: "categoria",
          attributes: ["id", "nombre"],
        },
      ],
      order: [["created_at", "DESC"]],
    })
  } catch (error) {
    throw new Error("Error al obtener movimientos por fecha: " + error.message)
  }
}

const getMovimientoPorCategoria = async (id_categoria) => {
  try {
    return await Movimiento.findAll({
      where: { id_categoria },
      include: [
        {
          model: Categoria,
          as: "categoria",
          attributes: ["id", "nombre"],
        },
      ],
      order: [["fecha", "DESC"]],
    })
  } catch (error) {
    throw new Error("Error al obtener movimientos por categoría: " + error.message)
  }
}

const getMovimientoPorTotal = async (total) => {
  try {
    return await Movimiento.findAll({
      where: { total },
      include: [
        {
          model: Categoria,
          as: "categoria",
          attributes: ["id", "nombre"],
        },
      ],
      order: [["fecha", "DESC"]],
    })
  } catch (error) {
    throw new Error("Error al obtener movimientos por total: " + error.message)
  }
}

module.exports = {
  list,
  create,
  update,
  remove,
  getMovimientoPorId,
  getMovimientoPorFecha,
  getMovimientoPorCategoria,
  getMovimientoPorTotal,
}

