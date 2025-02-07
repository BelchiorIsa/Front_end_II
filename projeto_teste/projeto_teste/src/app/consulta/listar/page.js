'use client'
import { useState } from "react";

export default function ListarConsulta() {
  const consultas = [
    { id: 1, medico: "Dr. João Silva", especialidade: "Cardiologista", paciente: "Fernando Martins", tipo: "Plano de Saúde" },
    { id: 2, medico: "Dra. Maria Souza", especialidade: "Cardiologista", paciente: "Luanna Ribeiro", tipo: "Particular" },
    { id: 3, medico: "Dr. Carlos Mendes", especialidade: "Ortopedista", paciente: "Camilly Queiroz", tipo: "Plano de Saúde" },
    { id: 4, medico: "Dra. Ana Oliveira", especialidade: "Pediatra", paciente: "Antonio Lima", tipo: "Particular" },
    { id: 5, medico: "Dr. Pedro Lima", especialidade: "Neurologista", paciente: "Junior Souza", tipo: "Plano de Saúde" },
    { id: 6, medico: "Dra. Juliana Rocha", especialidade: "Ginecologista", paciente: "Fatima De Limma", tipo: "Plano de Saúde" },
    { id: 7, medico: "Dr. Ricardo Alves", especialidade: "Psiquiatra", paciente: "Roberta Pardo", tipo: "Particular" },
    { id: 8, medico: "Dra. Fernanda Costa", especialidade: "Oftalmologista", paciente: "Ana julia Pereira", tipo: "Plano de Saúde" },
    { id: 9, medico: "Dr. Lucas Martins", especialidade: "Urologista", paciente: "Pedro Mattos", tipo: "Plano de Saúde" },
    { id: 10, medico:"Dra. Beatriz Nunes", especialidade: "Endocrinologista" , paciente: "Bianca Nunes", tipo: "Particular" },
  ];

  const [busca, setBusca] = useState("");
  const [consultasFiltrados, setconsultasFiltrados] = useState(consultas);

  const handleSearch = (e) => {
    const valorBusca = e.target.value;
    setBusca(valorBusca);

    const filtrados = consultas.filter((consulta) =>
      consulta.nome.toLowerCase().includes(valorBusca.toLowerCase())
    );
    setconsultasFiltrados(filtrados);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Consultas</h1>
      {/* <div>
        <input
          type="text"
          placeholder="Buscar paciente por nome"
          value={busca}
          onChange={handleSearch}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Buscar medico por nome"
          value={busca}
          onChange={handleSearch}
        />
      </div> */}
      <table border="1" width="100%" style={{ borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#ddd" }}>
            <th>ID</th>
            <th>Medico</th>
            <th>especialidade</th>
            <th>Paciente</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {consultasFiltrados.map((consulta) => (
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
  );
}
