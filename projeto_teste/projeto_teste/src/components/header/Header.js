"use client"
import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/Clínica.png" alt="Logo da Clínica" />
      </div>

      <ul className={styles.menu}>
      <li><a href="/">Home</a></li>

<li 
  onMouseEnter={() => handleMouseEnter("medicos")} 
  onMouseLeave={handleMouseLeave}
>
  Médicos
  {activeMenu === "medicos" && (
    <ul className={styles.dropdown}>
      <li><a href="/medicos/listar">Listar</a></li>
      <li><a href="/medicos/adicionar">Adicionar</a></li>
      <li><a href="/medicos/editar">Editar</a></li>
      <li><a href="/medicos/excluir">Excluir</a></li>
    </ul>
  )}
</li>

<li 
  onMouseEnter={() => handleMouseEnter("pacientes")} 
  onMouseLeave={handleMouseLeave}
>
  Pacientes
  {activeMenu === "pacientes" && (
    <ul className={styles.dropdown}>
      <li><a href="/pacientes/listar">Listar</a></li>
      <li><a href="/pacientes/adicionar">Adicionar</a></li>
      <li><a href="/pacientes/editar">Editar</a></li>
      <li><a href="/pacientes/excluir">Excluir</a></li>
    </ul>
  )}
</li>

<li 
  onMouseEnter={() => handleMouseEnter("consultas")} 
  onMouseLeave={handleMouseLeave}
>
  Consultas
  {activeMenu === "consultas" && (
    <ul className={styles.dropdown}>
      <li><a href="/consultas/listar">Listar Consultas</a></li>
      <li><a href="/consultas/agendar">Agendar Consulta</a></li>
      <li><a href="/consultas/editar">Editar Agendamento</a></li>
      <li><a href="/consultas/cancelar">Cancelar</a></li>
    </ul>
  )}
</li>
</ul>
</nav>
);
};

export default Header;