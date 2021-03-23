export async function request(...args) {
  const response = await fetch(...args)

  if (!response.ok) {
    throw new Error(`Network request failed for ${response.url} with ${response.status}`)
  }
  return response.json()
}
