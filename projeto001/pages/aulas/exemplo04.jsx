// Exemplo de uso do componente Titulo
import Titulo from "../components/Titulo"


export default function init(){
    return (
        <>
            <Titulo titulo="Teste Titulo" 
            subtitulo="Teste Subtitulo"></Titulo>
            <Titulo 
                titulo="Pagina Cadastro" 
                subtitulo="Gerenciar cadastro"
            />
            <Titulo 
                titulo="ADS" 
                subtitulo="Quarto semestre" 
                pequeno={true}
            />
        </>
    )
}