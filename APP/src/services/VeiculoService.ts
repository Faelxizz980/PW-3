import type { Veiculo } from "../types/Veiculo";

const API_URL = "http://127.0.0.1:3000/veiculos";

export async function getVeiculos(): Promise<Veiculo[]> {
  const response = await fetch(API_URL);
  return response.json();
}
