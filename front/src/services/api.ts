const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080'

export async function getApiHealth(): Promise<{ status: string }> {
  const response = await fetch(`${API_URL}/api/health`)

  if (!response.ok) {
    throw new Error('Não foi possível consultar a API.')
  }

  return response.json() as Promise<{ status: string }>
}
