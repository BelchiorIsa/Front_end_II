"use client"; 
import { useState } from "react";
export default function MedicosPage() {
    return (
      <div className="page-container">
        <h1>Médicos</h1>
        <ul>
          <li><a href="listar.js">Listar</a></li>
          <li><a href="/medico/adicionar">Adicionar</a></li>
          <li><a href="/medico/editar">Editar</a></li>
          <li><a href="/medico/excluir">Excluir</a></li>
        </ul>
      </div>
    );
  }

