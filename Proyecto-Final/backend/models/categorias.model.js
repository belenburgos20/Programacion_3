const { Categoria } = require("./index")

const listarCategorias = async () => {
  try {
    return await Categoria.findAll({
      order: [["nombre", "ASC"]],
    })
  } catch (error) {
    throw new Error("Error al listar categorías: " + error.message)
  }
}

const crearCategoria = async (nombre, descripcion = null) => {
  try {
    return await Categoria.create({ nombre, descripcion })
  } catch (error) {
    throw new Error("Error al crear categoría: " + error.message)
  }
}

const actualizarCategoria = async (id, nombre, descripcion = null) => {
  try {
    const categoria = await Categoria.findByPk(id)
    if (!categoria) {
      throw new Error("Categoría no encontrada")
    }

    categoria.nombre = nombre
    if (descripcion !== null) {
      categoria.descripcion = descripcion
    }

    await categoria.save()
    return categoria
  } catch (error) {
    throw new Error("Error al actualizar categoría: " + error.message)
  }
}

const eliminarCategoria = async (id) => {
  try {
    const categoria = await Categoria.findByPk(id)
    if (!categoria) {
      throw new Error("Categoría no encontrada")
    }

    await categoria.destroy()
    return true
  } catch (error) {
    throw new Error("Error al eliminar categoría: " + error.message)
  }
}

const obtenerCategoriaPorId = async (id) => {
  try {
    const categoria = await Categoria.findByPk(id)
    if (!categoria) {
      throw new Error("Categoría no encontrada")
    }
    return categoria
  } catch (error) {
    throw new Error("Error al obtener categoría: " + error.message)
  }
}

const obtenerCategoriasPorNombre = async (nombre) => {
  try {
    return await Categoria.findAll({
      where: {
        nombre: {
          [require("sequelize").Op.iLike]: `%${nombre}%`,
        },
      },
      order: [["nombre", "ASC"]],
    })
  } catch (error) {
    throw new Error("Error al buscar categorías: " + error.message)
  }
}

module.exports = {
  listarCategorias,
  crearCategoria,
  actualizarCategoria,
  eliminarCategoria,
  obtenerCategoriaPorId,
  obtenerCategoriasPorNombre,
}
