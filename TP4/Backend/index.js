const express = require("express")
const cors = require("cors")
const personasRoutes = require("./src/routes/personas.route")

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use("/personas", personasRoutes)

app.get("/", (req, res) => {
  res.send("API de Personas - TP4")
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})