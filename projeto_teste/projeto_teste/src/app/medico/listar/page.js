'use client'
import { useState } from "react";

export default function ListarMedicos() {
  const medicos = [
    { id: 1, nome: "Dr. João Silva", telefone: "(69) 99999-9999", email: "joao@clinica.com", especialidade: "Cardiologista" },
    { id: 2, nome: "Dra. Maria Souza", telefone: "(69) 98888-8888", email: "maria@clinica.com", especialidade: "Dermatologista" },
    { id: 3, nome: "Dr. Carlos Mendes", telefone: "(69) 97777-7777", email: "carlos@clinica.com", especialidade: "Ortopedista" },
    { id: 4, nome: "Dra. Ana Oliveira", telefone: "(69) 96666-6666", email: "ana@clinica.com", especialidade: "Pediatra" },
    { id: 5, nome: "Dr. Pedro Lima", telefone: "(69) 95555-5555", email: "pedro@clinica.com", especialidade: "Neurologista" },
    { id: 6, nome: "Dra. Juliana Rocha", telefone: "(69) 94444-4444", email: "juliana@clinica.com", especialidade: "Ginecologista" },
    { id: 7, nome: "Dr. Ricardo Alves", telefone: "(69) 93333-3333", email: "ricardo@clinica.com", especialidade: "Psiquiatra" },
    { id: 8, nome: "Dra. Fernanda Costa", telefone: "(69) 92222-2222", email: "fernanda@clinica.com", especialidade: "Oftalmologista" },
    { id: 9, nome: "Dr. Lucas Martins", telefone: "(69) 91111-1111", email: "lucas@clinica.com", especialidade: "Urologista" },
    { id: 10, nome: "Dra. Beatriz Nunes", telefone: "(69) 90000-0000", email: "beatriz@clinica.com", especialidade: "Endocrinologista" },
  ];

  const [busca, setBusca] = useState("");
  const [medicosFiltrados, setMedicosFiltrados] = useState(medicos);

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
