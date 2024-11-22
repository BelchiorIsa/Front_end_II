'use client';
import Link from "next/link"
import { useState} from "react";
import styles from "./header.module.css"
export default function Header(){
    const [showMenu, setShowMenu] = useState(false)//aparece, e true some
    return(
        <header>
            <button onClick={()=>setShowMenu(!showMenu)}>Clique</button>
            {
                showMenu && //&& (define se mostra a nav a partir do booleano) 
                <nav>
                <ul className={styles.li}>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/sobre'>Sobre</Link></li>
                    <li><Link href='/contato'>Contato</Link></li>
                    
                </ul>
                
            </nav>
            }
        </header>
            
    )
}