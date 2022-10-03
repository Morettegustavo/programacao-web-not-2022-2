export default function init(){
    const nome = "Cebolinha"
    return (
        <div>
            <h1>Hello World</h1>
            <h2>Outro texto</h2>
            <h3>3+3</h3>
            <h3>{3+3}</h3>
            <h3>{soma(4,6)}</h3>
            <h3>Nome: {nome}</h3>
        </div>
    )
}
function soma(a,b){
    return a+b;
}
// github.com/anaves/ADS-pw2-2022-2