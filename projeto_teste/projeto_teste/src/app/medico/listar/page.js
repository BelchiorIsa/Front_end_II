'use client';
import { useState, useEffect } from "react";

export default function ListarMedicos() {
  const [medicos, setMedicos] = useState([]);
  const [busca, setBusca] = useState("");
  const [medicosFiltrados, setMedicosFiltrados] = useState([]);

  useEffect(() => {
    fetch("https://api-clinica-2a.onrender.com/medicos")
      .then((response) => response.json())
      .then((data) => {
        setMedicos(data);
        setMedicosFiltrados(data);
      })
      .catch((error) => console.error("Erro ao buscar médicos:", error));
  }, []);

  const handleSearch = (e) => {
    const valorBusca = e.target.value;
    setBusca(valorBusca);
    
    const filtrados = medicos.filter((medico) =>
      medico.nome.toLowerCase().includes(valorBusca.toLowerCase())
    );
    setMedicosFiltrados(filtrados);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Médicos</h1>
      <div>
        <input
          type="text"
          placeholder="Buscar médico por nome"
          value={busca}
          onChange={handleSearch}
        />
      </div>
      <table border="1" width="100%" style={{ borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#ddd" }}>
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Especialidade</th>
          </tr>
        </thead>
        <tbody>
          {medicosFiltrados.map((medico) => (
            <tr key={medico.id}>
              <td>{medico.id}</td>
              <td>{medico.nome}</td>
              <td>{medico.telefone}</td>
              <td>{medico.email}</td>
              <td>{medico.especialidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
