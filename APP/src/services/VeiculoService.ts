import type { Veiculo } from "../types/Veiculo";

const API_URL = "http://localhost:3000/veiculos";

export async function getVeiculos(): Promise<Veiculo[]> {
  const response = await fetch(API_URL);
  return response.json();
}
