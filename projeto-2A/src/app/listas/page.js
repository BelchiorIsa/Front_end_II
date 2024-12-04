export default function Listas(){
    const looks =['vestidos', 'conjuntos', 'calças', 'camisetas', 'croppeds', 'saias', 'jaquetas', 'acessórios']

    const looksObj =[
        {
            id:1,
            look: 'Vestidos'
        },
        {
            id:2,
            look: 'conjuntos'
        },
        {
            id:3,
            look: 'calças'
        },
        {
            id:4,
            look: 'camisetas'
        },
        {
            id:5,
            look: 'croppeds'
        },
        {
            id:6,
            look: 'saias'
        },
        {
            id:7,
            look: 'jaquetas'
        },
        {
            id:8,
            look: 'acessórios'
        },
    ]
    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Listas</h1>
            {/* <p>{looksObj[0].look}</p> */}
            <h2>Lista comum</h2>
            <ul>
                {looks.map((look, i)=>(
                  <li key={i}>{i+1} - {look}</li>
                ))}
            </ul>
            <div>
            <h2>Lista de Objetos</h2>
            {looksObj.map((lookObj) =>(
                <div key={lookObj.id}>    
                    <h3>{lookObj.id}</h3> 
                    <p>{lookObj.look}</p>
                </div> 
                ))}
            </div>
        </div>
    )
}
