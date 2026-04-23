import { useEffect, useState } from "react";
import { getVeiculos } from "../services/VeiculoService";
import type { Veiculo } from "../types/Veiculo";
import { VeiculoCard } from "../components/VeiculoCard";
import { VeiculoModal } from "../components/ModalCard";

export function VeiculosList() {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const [veiculoSelecionado, setVeiculoSelecionado] = useState<Veiculo | null>(null);

  useEffect(() => {
    getVeiculos().then(setVeiculos);
  }, []);

  return (
    <div className="bg-gray-800 grid grid-cols-4 gap-4 p-4">
      <h1 className="text-gray-100 text-4xl font-bold col-span-4 text-center">
        Veículos
      </h1>

      {veiculos.map((v) => (
        <VeiculoCard
          key={v.id}
          veiculo={v}
          onClick={() => setVeiculoSelecionado(v)}
        />
      ))}

      {veiculoSelecionado && (
        <VeiculoModal
          veiculo={veiculoSelecionado}
          fabricante={[]} // depois você passa os dados reais
          anunciante={[]} // idem
          onClose={() => setVeiculoSelecionado(null)}
        />
      )}
    </div>
  );
}