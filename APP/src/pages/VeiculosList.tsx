import { useEffect, useState } from "react";
import { getVeiculos } from "../services/VeiculoService";
import type { Veiculo } from "../types/Veiculo";
import { VeiculoCard } from "../components/VeiculoCard";

export function VeiculosList() {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

  useEffect(() => {
    getVeiculos().then(setVeiculos);
  }, []);

  return (
    
    <div className="bg-gray-800 grid flex  grid-cols-4 gap-4 p-4">
      <h1 className="text-gray-100 text-2xl text-center text-4xl font-bold col-span-4">Veículos</h1>
      {veiculos.map((v) =>(
        <VeiculoCard  key={v.id} veiculo={v}/>
      ))}
    </div>
  );
}

