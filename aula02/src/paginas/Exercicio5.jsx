export default function Exercicio5({consultas})
{
    let bruto, inss, liquido;
    bruto=Number(consultas)*150;
    inss=Number(bruto)*0.08;
    liquido=Number(bruto)-Number(inss);
    return (
        <div>
             O seu salario bruto é de (bruto) o desconto do INSS é de {inss} e seu salario liquido sera de
        </div>
    )
}