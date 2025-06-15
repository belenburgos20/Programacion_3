function TarjetaPersona({ persona }) {
  return (
    <div className="TarjetaPersona">
      <h2>{persona.nombre}</h2>
      <p>Apellido: {persona.apellido}</p>
      <p>Edad: {persona.edad}</p>
      <p>Email: {persona.email}</p>
    </div>
  );
}
export default TarjetaPersona;