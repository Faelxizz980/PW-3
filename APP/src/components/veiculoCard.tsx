import type {Veiculo} from "../types/Veiculo";

interface Props{
    veiculo: Veiculo;
}

export function VeiculoCard({ veiculo }: Props) {
  return (
    <div className="bg-gray-500 flex flex-col rounded-lg hover:scale-102 delay-100 shadow-xl shadow-gray-700/50">
      
      {/* Container fixo para a imagem */}
      <div className="w-full h-48 flex items-center justify-center">
        <img 
          src={veiculo.fotos[0]} 
          className="object-contain w-full h-full"
        />
      </div>

      {/* Conteúdo sempre no mesmo nível */}
      <div className="p-4 flex flex-col gap-1">
        <h2 className="text-gray-100 font-bold text-lg">{veiculo.modelo}</h2>
        <p className="text-gray-100">{veiculo.descricao}</p>
        <p className="text-gray-100">
          Ano: {veiculo.ano} / {veiculo.ano_modelo}
        </p>
        <strong className="text-gray-100">
          R$ {veiculo.valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </div>

    </div>
  )
}