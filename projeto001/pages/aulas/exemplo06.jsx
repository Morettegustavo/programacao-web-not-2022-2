import CalculadoraV2 from "../components/CalculadoraV2"
export default function init(){
    return (
        <>
            <CalculadoraV2 num1={10} num2={15} soma/>
            <CalculadoraV2 num1={10} num2={15} subtracao/>
            <CalculadoraV2 num1={10} num2={15} multiplicacao/>
            <CalculadoraV2 num1={15} num2={10} divisao/>
            <CalculadoraV2 num1={10} num2={0} divisao/>
            <CalculadoraV2 num1={10} num2={15}/>
        </>
        
    )
}