import { useEffect, useState } from "react";
import ListaTarjetas from "./ListaTarjetas";

function TraerPersonas() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/personas");
      const data = await response.json();
      setPersonas(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista de Personas</h2>
      <ListaTarjetas personas={personas} />
      </div>
  );}
export default TraerPersonas;