import Titulo from "../components/titulo";
import React from "react";

// exemplo de uso do componente Título
export default function() {
    return (
        <React.Fragment>
            <Titulo titulo="Teste titulo" subtitulo="Teste subTitulo"></Titulo>
            <Titulo titulo="Pagina Cadastro" subtitulo="Gerenciar cadastro" pequeno={true}></Titulo>
        </React.Fragment>
    )
}