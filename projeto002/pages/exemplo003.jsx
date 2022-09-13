import estilo from "../styles/exemplo003.module.css"

export default function init(){
    return (
        <>
        <h1 className={estilo.vermelha}>Exemplo css escopado</h1>
        <h1 id={estilo.cinza}>Estilo por id</h1>
        </>
    )
}