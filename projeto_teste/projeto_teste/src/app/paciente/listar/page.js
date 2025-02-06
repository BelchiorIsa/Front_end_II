'use client'
import { useState } from "react";

export default function ListarPaciente() {
  const pacientes = [
    { id: 1, nome: "Fernando Martins", telefone: "(69) 99999-9999", email: "nandinho@clinica.com", cpf: "012.021.514-85" },
    { id: 2, nome: "Luanna Ribeiro", telefone: "(69) 98888-8888", email: "luanari@clinica.com", cpf: "250.521.854-85" },
    { id: 3, nome: "Camilly Queiroz ", telefone: "(69) 97777-7777", email: "milly@clinica.com", cpf: "524.856.755-85" },
    { id: 4, nome: "Antonio Lima", telefone: "(69) 96666-6666", email: "toninho@clinica.com", cpf: "647.748.847-87" },
    { id: 5, nome: "Junior Souza", telefone: "(69) 95555-5555", email: "souzaju@clinica.com", cpf: "447.154.854-85" },
    { id: 6, nome: "Fatima De Limma", telefone: "(69) 94444-4444", email: "fatimalimma@clinica.com", cpf: "145.847.514-51" },
    { id: 7, nome: "Roberta Pardo", telefone: "(69) 93333-3333", email: "pardo@clinica.com", cpf: "345.879.083-45" },
    { id: 8, nome: "Ana julia Pereira", telefone: "(69) 92222-2222", email: "naju@clinica.com", cpf: "252.255.255-85" },
    { id: 9, nome: "Pedro Mattos", telefone: "(69) 91111-1111", email: "pedroca@clinica.com", cpf: "252.888.999-10" },
    { id: 10, nome: "Bianca Nunes", telefone: "(69) 90000-0000", email: "bianunes@clinica.com", cpf: "545.545.254-85" },
  ];

  const [busca, setBusca] = useState("");
  const [pacientesFiltrados, setPacientesFiltrados] = useState(pacientes);

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
  );
}
