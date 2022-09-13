export default function init(props){
    //props.numero++ // nao podemos alterar uma propriedade
    let x = props.numero + 1
    return (
        <>
            <h1>{props.numero+1}</h1>
            <h1>{x}</h1>
            <h1>{incrementar(props.numero)}</h1>
        </>
    )
}

function incrementar(numero){
    numero++
    return numero
}