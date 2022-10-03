export default function init(){
    return (
        <div>
            {lista(50)}
        </div>
    )    
}

function lista(n){
    const vet=[]
    for(let i=0; i<=n; i++){
        vet.push(<span>{i} </span>)
    }
    return vet
}

