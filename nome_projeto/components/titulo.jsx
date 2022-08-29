export default function Titulo(props) {
    if(props.pequeno){
        return (
            <div>
                <p>{props.titulo}</p>
                <p>{props.subtitulo}</p>
            </div>
        )
    } else{
        return (
            <div>
                <h1>{props.titulo}</h1>
                <h2>{props.subtitulo}</h2>
            </div>
        )
    }
}
