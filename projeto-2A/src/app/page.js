// import Image from "next/image";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const nome = 'Belchior (Homem Aranha)'
  return (
    <div>
    <h1>Homem Aranha</h1>
    <p>Isa linda</p>
    <p>Autor: {nome}</p>
    <Image className={styles.imagem} src="/images/OIP.jpg" alt= "Homem Aranha" width={600} height={400} />
    </div>
  );
}
