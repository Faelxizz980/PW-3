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
    <div>
      {veiculos.map((v) =>(
        <VeiculoCard  key={v.id} veiculo={v}/>
      ))}
    </div>
  );
}

