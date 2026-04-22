import "./app.css";

export default function app()
  {
   let nome, idade, dias
   nome= "rafaelli";
   idade= 16;
   dias= idade * 365;
  return(
    <div>
      <h1>Ola mundo !!!</h1>
      <div className="conteudo">
        <p>Olá seja bem vindo ao react com js.</p>
        <p> O aluno {nome} ja viveu {dias} dias.</p>
      </div>
    </div>
  )
}