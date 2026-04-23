import type { Veiculo } from "../types/Veiculo";
import type { Fabricante } from "../types/Fabricante";
import type { Anunciante } from "../types/Anunciante";

interface Props {
    veiculo : Veiculo;
    fabricante : Fabricante[];
    anunciante : Anunciante[];
    onClose: () => void;
}

export function VeiculoModal({ veiculo, anunciante, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-white w-[700px] rounded-2xl shadow-2xl overflow-hidden relative shadow-lg">

        <button
          onClick={onClose}
          className="absolute top-3 right-3 cursor-pointer text-red-700 text-xl transition-all duration-300  hover:text-red-900"
        >
         fechar  
        </button>

        <div className="w-full h-64 bg-white flex items-center justify-center">
          <img
            src={veiculo.fotos[0]}
            className="object-contain h-full"
          />
        </div>

        <div className="p-5">
          <h2 className="text-2xl font-bold">
            {veiculo.modelo}
          </h2>
          <p className="text-gray-600 mt-1">
            {veiculo.ano} / {veiculo.ano_modelo}
          </p>
          <strong className="block mt-3 text-3xl text-green-700">
            {veiculo.valor.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
          <p className="mt-4 text-gray-700 text-sm leading-relaxed">
            {veiculo.descricao}
          </p>
          <div className="border-t my-4"></div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl text-gray-500">Anunciante</p>
              <p className="mt-1 text-lg font-semibold">{anunciante.find(a => a.id == veiculo.Anunciantes_id)?.nome ?? veiculo.Anunciantes_id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
