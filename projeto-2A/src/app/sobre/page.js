// const sobre = () => 
    import styles from "./sobre.module.css"

    export default function sobre(){
    return(
        <main>
            <h1>Sobre</h1>
            <p className= {styles.paragrafo}>Minha segunda página do homem aranha</p>
            <p id= {styles.paragrafoUnico}> Meu págrafo especial</p>
        </main>
    )
}

