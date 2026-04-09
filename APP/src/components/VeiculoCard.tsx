import type {Veiculo} from "../types/Veiculo";

interface Props{
    veiculo: Veiculo;
}

export function VeiculoCard({veiculo}: Props){
    return(
        <div style={{border:"1px solid #ccc", margin: 10, padding: 10}}>
        <img src={veiculo.fotos[0]}/>
        <h2>{veiculo.modelo}</h2>
        <p>{veiculo.descricao}</p>

        <p>
            Ano: {veiculo.ano} / {veiculo.ano_modelo}
        </p>

        <strong>R$ {veiculo.valor.toLocaleString("pt-BR",{
            style: "currency",
            currency:"BRL",
        })}</strong>
        </div>
    )
}