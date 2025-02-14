'use client';
import { useState, useEffect } from "react";

export default function ListarPaciente() {
  const [pacientes, setPacientes] = useState([]);
  const [busca, setBusca] = useState("");
  const [pacientesFiltrados, setPacientesFiltrados] = useState([]);

  useEffect(() => {
    fetch("https://api-clinica-2a.onrender.com/pacientes")
      .then((response) => response.json())
      .then((data) => {
        setPacientes(data);
        setPacientesFiltrados(data);
      })
      .catch((error) => console.error("Erro ao buscar pacientes:", error));
  }, []);

  const handleSearch = (e) => {
    const valorBusca = e.target.value;
    setBusca(valorBusca);
    
    const filtrados = pacientes.filter((paciente) =>
      paciente.nome.toLowerCase().includes(valorBusca.toLowerCase())
    );
    setPacientesFiltrados(filtrados);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Pacientes</h1>
      <div>
        <input
          type="text"
          placeholder="Buscar paciente por nome"
          value={busca}
          onChange={handleSearch}
        />
      </div>
      <div style={{width: "100%", overflowX: "auto"}}>
      <table border="1" width="100%" style={{ borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#ddd" }}>
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
          {pacientesFiltrados.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.id}</td>
              <td>{paciente.nome}</td>
              <td>{paciente.telefone}</td>
              <td>{paciente.email}</td>
              <td>{paciente.cpf}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}