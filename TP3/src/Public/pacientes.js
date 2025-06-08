function getToken() {
  return localStorage.getItem("authToken")
}

function getAuthHeaders() {
  const token = getToken()
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search)
  const token = urlParams.get("token")

  if (token) {
    localStorage.setItem("authToken", token)
    window.history.replaceState({}, document.title, window.location.pathname)
  }
})

function mostrarFormularioPaciente() {
  document.getElementById("tituloModalPaciente").textContent = "Agregar Paciente"
  document.getElementById("formPaciente").reset()
  document.getElementById("pacienteId").value = ""
  document.getElementById("modalPaciente").style.display = "flex"
}

function editarPaciente(id, dni, nombre, apellido, email) {
  document.getElementById("tituloModalPaciente").textContent = "Editar Paciente"
  document.getElementById("pacienteId").value = id
  document.getElementById("dni").value = dni
  document.getElementById("nombre").value = nombre
  document.getElementById("apellido").value = apellido
  document.getElementById("email").value = email
  document.getElementById("modalPaciente").style.display = "flex"
}

async function eliminarPaciente(id) {
  if (confirm("¿Está seguro de que desea eliminar este paciente?")) {
    try {
      const response = await fetch("/api/v1/pacientes/" + id, {
        method: "DELETE",
        headers: getAuthHeaders(),
      })

      if (response.ok) {
        alert("Paciente eliminado correctamente")
        location.reload()
      } else {
        alert("Error al eliminar paciente")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error al eliminar paciente")
    }
  }
}

function mostrarFormularioTurno() {
  document.getElementById("tituloModalTurno").textContent = "Agregar Turno"
  document.getElementById("formTurno").reset()
  document.getElementById("turnoId").value = ""
  document.getElementById("modalTurno").style.display = "flex"
}

async function editarTurno(id) {
  try {
    const response = await fetch("/api/v1/turnos/" + id, {
      headers: getAuthHeaders(),
    })
    const turno = await response.json()

    document.getElementById("tituloModalTurno").textContent = "Editar Turno"
    document.getElementById("turnoId").value = turno.id
    document.getElementById("fecha").value = turno.fecha
    document.getElementById("hora").value = turno.hora
    document.getElementById("pacienteSelect").value = turno.pacienteId
    document.getElementById("estado").value = turno.estado
    document.getElementById("modalTurno").style.display = "flex"
  } catch (error) {
    alert("Error al cargar datos del turno")
    console.error(error)
  }
}

async function eliminarTurno(id) {
  if (confirm("¿Está seguro de que desea eliminar este turno?")) {
    try {
      const response = await fetch("/api/v1/turnos/" + id, {
        method: "DELETE",
        headers: getAuthHeaders(),
      })

      if (response.ok) {
        alert("Turno eliminado correctamente")
        location.reload()
      } else {
        alert("Error al eliminar turno")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error al eliminar turno")
    }
  }
}

function cerrarModal(modalId) {
  document.getElementById(modalId).style.display = "none"
}

document.getElementById("formPaciente").addEventListener("submit", async (e) => {
  e.preventDefault()

  const id = document.getElementById("pacienteId").value
  const data = {
    dni: document.getElementById("dni").value,
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    email: document.getElementById("email").value,
  }

  const url = id ? "/api/v1/pacientes/" + id : "/api/v1/pacientes"
  const method = id ? "PUT" : "POST"

  try {
    const response = await fetch(url, {
      method: method,
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    })

    if (response.ok) {
      alert(id ? "Paciente actualizado correctamente" : "Paciente creado correctamente")
      location.reload()
    } else {
      alert("Error al guardar paciente")
    }
  } catch (error) {
    console.error("Error:", error)
    alert("Error al guardar paciente")
  }
})

document.getElementById("formTurno").addEventListener("submit", async (e) => {
  e.preventDefault()

  const id = document.getElementById("turnoId").value
  const data = {
    fecha: document.getElementById("fecha").value,
    hora: document.getElementById("hora").value,
    pacienteId: Number.parseInt(document.getElementById("pacienteSelect").value),
    estado: document.getElementById("estado").value,
  }

  const url = id ? "/api/v1/turnos/" + id : "/api/v1/turnos"
  const method = id ? "PUT" : "POST"

  try {
    const response = await fetch(url, {
      method: method,
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    })

    if (response.ok) {
      alert(id ? "Turno actualizado correctamente" : "Turno creado correctamente")
      location.reload()
    } else {
      alert("Error al guardar turno")
    }
  } catch (error) {
    console.error("Error:", error)
    alert("Error al guardar turno")
  }
})

window.onclick = (event) => {
  const modalPaciente = document.getElementById("modalPaciente")
  const modalTurno = document.getElementById("modalTurno")
  if (event.target == modalPaciente) {
    modalPaciente.style.display = "none"
  }
  if (event.target == modalTurno) {
    modalTurno.style.display = "none"
  }
}
