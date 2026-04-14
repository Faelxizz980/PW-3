import type { Veiculo } from "../types/Veiculo";

const API_URL = "https://supreme-guide-r46qj5xg454p2xg4p-3000.app.github.dev/veiculos";

export async function getVeiculos(): Promise<Veiculo[]> {
  const response = await fetch(API_URL);
  return response.json();
}
