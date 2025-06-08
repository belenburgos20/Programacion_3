const home = async (req, res) => {
  res.render("index", {
    title: "Sistema de Gestión de Clínica",
    query: req.query,
  })
}

module.exports = {
  home,
}




