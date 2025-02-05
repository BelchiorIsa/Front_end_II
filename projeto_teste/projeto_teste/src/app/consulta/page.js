"use client"; 
import { useState } from "react";

export default function ConsultaPage() {
    return (
      <div className="page-container">
        <h1>Agendamentos</h1>
        <ul>
          <li><a href="/consulta/listar">Listar Consultas</a></li>
          <li><a href="/consulta/agendar">Agendar Consulta</a></li>
          <li><a href="/consulta/editar">Editar Agendamento</a></li>
          <li><a href="/consulta/cancelar">Cancelar</a></li>
        </ul>
      </div>
    );
  }

