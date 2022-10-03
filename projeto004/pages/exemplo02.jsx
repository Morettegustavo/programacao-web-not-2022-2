import listaProdutos from "../data/listaProdutos";

export default function init(){

    function renderizarLista(){
        return listaProdutos.map(el => 
        <li key={el.id}>
            id = {el.id} 
            {" "} nome = {el.nome}
            {" "} preco = {el.preco}</li>)
    }

    return (
        <>
            <h1>Produtos</h1>
            <ol>
                {renderizarLista()}
            </ol>
        </>
    )
}