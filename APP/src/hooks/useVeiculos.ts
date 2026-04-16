import { useEffect, useState } from "react";
import { getVeiculos } from "../services/VeiculoService";
import type { Veiculo } from "../types/Veiculo";

export function useVeiculos() {
    const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<String | null>(null);

useEffect(() =>{
    async function fecthData(){
        try{
            const data = await getVeiculos();
            setVeiculos(data);
        }
        catch (err) {
            setError(`Erro ao carregar veículos: ${err instanceof Error ? err.message: "Erro desconhecido"}`);
        }
        finally{
            setLoading(false);
        }
    }

    fecthData();
}, [])
return { veiculos, loading, error };
}