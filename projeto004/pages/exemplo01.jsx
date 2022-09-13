export default function init(){
    const nomes = ["Cebolinha", "Monica", "Magali","Cascao"]
    // forma1  
    function renderizarLista(){
        let lista = []
        for (let index = 0; index < nomes.length; index++) {
            const element = nomes[index];
            lista.push(<li key={index}>{element}</li>)            
        }
        return lista;
    }

    // forma 2
    function renderizarListaMap(){
        return nomes.map((elemento,i) => <li key={i}>{elemento}</li>)
    }
    return (
        <>
            <h1>Nomes</h1>
            <ol>
                {renderizarLista()}
            </ol>
            <h1>Nomes - forma 2</h1>
            <ul>
                {renderizarListaMap()}
            </ul>
        </>
    )
}