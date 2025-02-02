'use client';
import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [showMenu, setShowMenu] = useState(true);
    return (
        <header className={styles.header}>
            <button className={styles.menuButton} onClick={() => setShowMenu(!showMenu)}>
                <Image className={styles.rat}
                    src="/menu.png"
                    alt="Ícone do menu"
                    width={40} 
                    height={40} 
                />
            </button>
            {
                showMenu &&
                <nav>
                    <ul className={styles.li}>
                        <img className={styles.me}
                            src="/Clínica.png"
                            alt="menu"
                            width={150} // Aumentado mais
                            height={80} // Aumentado mais
                        />
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/medico'>Médico</Link></li>
                        <li><Link href='/paciente'>Paciente</Link></li>
                        <li><Link href='/consulta'>Consulta</Link></li>
                    </ul>
                </nav>
            }
        </header>
    );
}
