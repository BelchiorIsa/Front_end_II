"use client"; 
import { useState } from "react";

export default function Consulta() {
    const [consultas, setConsultas] = useState([
        { id: 1, data: '2025-02-10', paciente: 'João' },
        { id: 2, data: '2025-02-12', paciente: 'Maria' },
        { id: 3, data: '2025-02-14', paciente: 'Matheus' },
        { id: 4, data: '2025-02-20', paciente: 'Eduarda' },
        { id: 5, data: '2025-02-16', paciente: 'Carlos' },
        { id: 6, data: '2025-02-11', paciente: 'Bruna' },
    ]);

    const [novaConsulta, setNovaConsulta] = useState('');
    const [novoPaciente, setNovoPaciente] = useState('');
    const [consultaParaReagendar, setConsultaParaReagendar] = useState(null);

    const agendarConsulta = () => {
        const nova = { id: consultas.length + 1, data: novaConsulta, paciente: novoPaciente };
        setConsultas([...consultas, nova]);
        setNovaConsulta('');
        setNovoPaciente('');
    };

    const reagendarConsulta = (id) => {
        setConsultas(
            consultas.map(consulta => 
                consulta.id === id ? { ...consulta, data: novaConsulta } : consulta
            )
        );
        setNovaConsulta('');
        setConsultaParaReagendar(null);
    };

    const cancelarConsulta = (id) => {
        setConsultas(consultas.filter(consulta => consulta.id !== id));
    };

    return (
        <main>
            <h1>Dados da consulta</h1>
            <h2>Listar Consultas</h2>
            <ul>
                {consultas.map(consulta => (
                    <li key={consulta.id}>
                        {consulta.data} - {consulta.paciente}
                        <button onClick={() => setConsultaParaReagendar(consulta.id)}>Reagendar</button>
                        <button onClick={() => cancelarConsulta(consulta.id)}>Cancelar</button>
                    </li>
                ))}
            </ul>

            <h2>Agendar Nova Consulta</h2>
            <input
                type="date"
                value={novaConsulta}
                onChange={(e) => setNovaConsulta(e.target.value)}
            />
            <input
                type="text"
                placeholder="Nome do Paciente"
                value={novoPaciente}
                onChange={(e) => setNovoPaciente(e.target.value)}
            />
            <button onClick={agendarConsulta}>Agendar</button>

            {consultaParaReagendar && (
                <div>
                    <h2>Reagendar Consulta</h2>
                    <input
                        type="date"
                        value={novaConsulta}
                        onChange={(e) => setNovaConsulta(e.target.value)}
                    />
                    <button onClick={() => reagendarConsulta(consultaParaReagendar)}>Reagendar</button>
                </div>
            )}
        </main>
    );
}
