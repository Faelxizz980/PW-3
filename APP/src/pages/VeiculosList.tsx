import { VeiculoCard } from "../components/veiculoCard";
import { useVeiculos } from "../hooks/useVeiculos";

export function VeiculosList() {
  const { veiculos, loading, error } = useVeiculos();

  if (loading) {
    return <p>Carregando veículos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="bg-gray-800 grid flex  grid-cols-4 gap-4 p-4">
      <h1 className="text-gray-100 text-2xl text-center text-4xl font-bold col-span-4">Lista de Veículos</h1>

      {veiculos.map((v) => (
        <VeiculoCard key={v.id} veiculo={v} />
      ))}
    </div>
  );
}