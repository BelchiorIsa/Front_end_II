'use client';
import { useState, useEffect } from "react";

export default function ListarConsulta() {
  const [consultas, setConsultas] = useState([]);
  const [buscaPaciente, setBuscaPaciente] = useState("");
  const [buscaMedico, setBuscaMedico] = useState("");

  useEffect(() => {
    fetch("https://api-clinica-2a.onrender.com/consultas")
      .then((response) => response.json())
      .then((data) => setConsultas(data))
      .catch((error) => console.error("Erro ao buscar consultas:", error));
  }, []);

  const consultasFiltradas = consultas.filter(
    (consulta) =>
      consulta.paciente.toLowerCase().includes(buscaPaciente.toLowerCase()) &&
      consulta.medico.toLowerCase().includes(buscaMedico.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Consultas</h1>
      <div>
        <input
          type="text"
          placeholder="Buscar paciente por nome"
          value={buscaPaciente}
          onChange={(e) => setBuscaPaciente(e.target.value)}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Buscar médico por nome"
          value={buscaMedico}
          onChange={(e) => setBuscaMedico(e.target.value)}
        />
      </div>
      <div style={{width: "100%", overflowX: "auto"}}>
      <table border="1" width="100%" style={{ borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#ddd" }}>
            <th>ID</th>
            <th>Médico</th>
            <th>Especialidade</th>
            <th>Paciente</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {consultasFiltradas.map((consulta) => (
            <tr key={consulta.id}>
              <td>{consulta.id}</td>
              <td>{consulta.medico}</td>
              <td>{consulta.especialidade}</td>
              <td>{consulta.paciente}</td>
              <td>{consulta.tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
