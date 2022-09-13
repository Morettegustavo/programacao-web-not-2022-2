import Celula from "./celula"
import css from "../styles/linha.module.css"

// se a propriedade preto for passada para o componente linha, a primeira celula da linha sera pintada de preto, caso contrario a primeira celula deve ser pintada de branco.
export default function init(props){
    return (
        <div className={css.lin}>
            <Celula preto={props.preto}/>
            <Celula preto={!props.preto}/>
            <Celula preto={props.preto}/>
            <Celula preto={!props.preto}/>
            <Celula preto={props.preto}/>
            <Celula preto={!props.preto}/>
            <Celula preto={props.preto}/>
            <Celula preto={!props.preto}/>
        </div>
    )
}