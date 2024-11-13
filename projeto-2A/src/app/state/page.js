'use client'
import { useState} from "react";

export default function State(){
    // let conteudo = 'Bom dia';
    const [conteudo, setConteudo] = useState ('Bom dia!')
    const [name, setName] = useState ('')
    const [showDiv, setShowDiv] = useState (true)

    const controlarParagrafo = () =>{
        setConteudo ('Boa tarde')
        console.log('conteudo: ' +conteudo)
    }

    const controlarInput = (evento) => {
        console.log(evento.target.value);
        setName (evento.target.value)
    }
    return (
        <div> 
            {/* <p>{conteudo}</p>
            <button onClick={controlarParagrafo}>Mudar</button> */}

            <button onClick ={()=>{setShowDiv(!setDiv)}}>{showDiv?'Esconder': 'Mostrar'}</button>
            {showDiv && 
                (
            <div>
                <p>Nome: {name}</p>
                <input type="text" onChange={controlarInput} /> 
            </div>
                )
            }
        </div>
    )
    
}
// sempre que alguém modificar o input, chama a função