import CalculadoraV2 from "../components/CalcauladoraV2";
export default function init(){
    return (
        <>
            <CalculadoraV2 num1={10} num2={15} soma/>
            <CalculadoraV2 num1={15} num2={10} subtracao/>
            <CalculadoraV2 num1={10} num2={5} divisao/>
            <CalculadoraV2 num1={10} num2={5} multiplicacao/>
        </>
        
    )
}