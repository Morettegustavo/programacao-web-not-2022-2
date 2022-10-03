import Tabuleiro from "../components/tabuleiro"

// rota que utiliza o componente tabuleiro definido em components
export default function init(){
    return (
        <>
           <Tabuleiro />
           <h1>OUTRO TABULEIRO</h1>
           <Tabuleiro dimensao={12}/>

        </>
    )
}