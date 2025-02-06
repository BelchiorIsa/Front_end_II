"use client";
import React, { useState } from "react";
import Link from "next/link";
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
        <li><Link href="/">Home</Link></li>

        <li 
          onMouseEnter={() => handleMouseEnter("medicos")} 
          onMouseLeave={handleMouseLeave}
        >
          Médicos
          {activeMenu === "medicos" && (
            <ul className={styles.dropdown}>
              <li><Link href="/medico/listar">Listar</Link></li>
              <li><Link href="/medico/adicionar">Adicionar</Link></li>
              <li><Link href="/medico/editar">Editar</Link></li>
              <li><Link href="/medico/excluir">Excluir</Link></li>
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
              <li><Link href="/paciente/listar">Listar</Link></li>
              <li><Link href="/pacientes/adicionar">Adicionar</Link></li>
              <li><Link href="/pacientes/editar">Editar</Link></li>
              <li><Link href="/pacientes/excluir">Excluir</Link></li>
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
              <li><Link href="/consultas/listar">Listar Consultas</Link></li>
              <li><Link href="/consultas/agendar">Agendar Consulta</Link></li>
              <li><Link href="/consultas/editar">Editar Agendamento</Link></li>
              <li><Link href="/consultas/cancelar">Cancelar</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
