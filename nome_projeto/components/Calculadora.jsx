export default function init(props) {
    /* props.numero++ */
    // não podemos alterar uma propriedade
    let x = props.numero + 1
    return (
        <>
            <h1>{props.numero}</h1>
            <h1>{x}</h1>
            <h2>{incremetar(props.numero)}</h2>
            
        </>
    )
}

function incremetar(numero){
    return ++numero;
}