"use client"; 
import { useState } from "react";
export default function MedicosPage() {
    return (
      <div className="page-container">
        <h1>Médicos</h1>
        <ul>
          <li><a href="/medico/listar">Listar</a></li>
          <li><a href="/medico/adicionar">Adicionar</a></li>
          <li><a href="/medico/editar">Editar</a></li>
          <li><a href="/medico/excluir">Excluir</a></li>
        </ul>
      </div>
    );
  }

// export default function Medico() {
//     const [registros, setRegistros] = useState([
//         { id: 1, nome: "Dr. João", especialidade: "Cardiologista" },
//         { id: 2, nome: "Dra. Maria", especialidade: "Dermatologista" },
//         { id: 3, nome: "Dra. Fernanda", especialidade: "Pneumologista" },
//         { id: 4, nome: "Dr. Claudio", especialidade: "Ortopedista" },
//         { id: 5, nome: "Dra. Ana Ferraz", especialidade: "Pediatria" },
//         { id: 6, nome: "Dr. Ricardo", especialidade: "Ortopedista" },
//         { id: 7, nome: "Dra. Simone Ribeiro", especialidade: "Radiologista" },
//         { id: 8, nome: "Dra. Emilly Queiroz ", especialidade: "Neurologista" },
//     ]);
//     const [busca, setBusca] = useState("");
//     const [novoNome, setNovoNome] = useState("");
//     const [novaEspecialidade, setNovaEspecialidade] = useState("");
//     const adicionarRegistro = () => {
//         if (novoNome && novaEspecialidade) {
//             setRegistros([...registros, { id: Date.now(), nome: novoNome, especialidade: novaEspecialidade }]);
//             setNovoNome("");
//             setNovaEspecialidade("");
//         }
//     };

//     const editarRegistro = (id) => {
//         const novoNome = prompt("Novo nome:");
//         const novaEspecialidade = prompt("Nova especialidade:");
//         if (novoNome && novaEspecialidade) {
//             setRegistros(registros.map(registro => 
//                 registro.id === id ? { ...registro, nome: novoNome, especialidade: novaEspecialidade } : registro
//             ));
//         }
//     };

//     const excluirRegistro = (id) => {
//         setRegistros(registros.filter(registro => registro.id !== id));
//     };

//     return (
//         <main>
//             <h1>Médico</h1>

//             <input 
//                 type="text" 
//                 placeholder="Buscar médico..." 
//                 value={busca} 
//                 onChange={(e) => setBusca(e.target.value)}
//             />

//             <ul>
//                 {registros
//                     .filter(registro => registro.nome.toLowerCase().includes(busca.toLowerCase()))
//                     .map(registro => (
//                         <li key={registro.id}>
//                             {registro.nome} - {registro.especialidade}
//                             <button onClick={() => editarRegistro(registro.id)}>Editar</button>
//                             <button onClick={() => excluirRegistro(registro.id)}>Excluir</button>
//                         </li>
//                     ))}
//             </ul>

//             <h2>Adicionar Médico</h2>
//             <input 
//                 type="text" 
//                 placeholder="Nome do médico" 
//                 value={novoNome} 
//                 onChange={(e) => setNovoNome(e.target.value)}
//             />
//             <input 
//                 type="text" 
//                 placeholder="Especialidade" 
//                 value={novaEspecialidade} 
//                 onChange={(e) => setNovaEspecialidade(e.target.value)}
//             />
//             <button onClick={adicionarRegistro}>Adicionar</button>
//         </main>
//     );
// }
