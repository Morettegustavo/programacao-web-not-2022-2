// se o css for global, ele deve ser importado no arquivo _app.js (regra do next!!!)
// incluir a importacao do css no arquivo _app.js

export default function init(){
    return (
        <div className="ex001">
            <div className="azul">#azul</div>
            <div className="verde">#verde</div>
        </div>
    )
}