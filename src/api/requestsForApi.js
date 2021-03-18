export async function request(...args) {
  // debugger
  const response = await fetch(...args)

  if (!response.ok) {
    throw new Error(`Network request failed for ${response.url} with ${response.status}`)
  }
  return response.json()
}
