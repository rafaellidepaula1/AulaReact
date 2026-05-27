export default function Exercicio6({Capital, juros, tempo});
{
    let m, n1;
    m= Number(capital) * (1 + (number(juros)/100) * Number(tempo));
    m1= Number(capital) * (1 + (number(juros)/100) ** Number(tempo));
    return(
        <div>
            O juros simples é {m} e o juros composto é {m1}
        </div>
    )

}