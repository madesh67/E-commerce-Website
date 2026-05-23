const API = import.meta.env.VITE_API_URL;

export async function getHomepage() {
  const response = await fetch(`${API}/api/homepage`);

  return response.json();
}
