export default function Exercicio1({Fahrenheint})
{
   let celsius = (Number(Fahrenheint)-32* 5) /9
    return (
        <div>
            a temperatura {Fahrenheint} é {celsius} em celsius
        </div>
    )
}