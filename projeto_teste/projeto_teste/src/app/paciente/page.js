export default function PacientesPage() {
    return (
      <div className="page-container">
        <h1>Pacientes</h1>
        <ul>
          <li><a href="/paciente/listar">Listar</a></li>
          <li><a href="/paciente/adicionar">Adicionar</a></li>
          <li><a href="/paciente/editar">Editar</a></li>
          <li><a href="/paciente/excluir">Excluir</a></li>
        </ul>
      </div>
    );
  }

