import css from "../styles/celula.module.css"

// elemento mais simples que representa uma casa no tabuleiro
export default function init(props){
    return (
        <>
            <div 
            style={{backgroundColor: props.preto? "black":"white"}}
            className={css.cel}>
                
            </div>
        </>
    )
}