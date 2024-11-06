// import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const nome = 'Belchior (Homem Aranha)'
  return (
    <div>
    <h1>Página principal</h1>
    <p>Páragrafo da página principal</p>
    <p>Autor: {nome}</p>
    </div>
  );
}
