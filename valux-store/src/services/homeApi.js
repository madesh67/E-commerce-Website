const API = import.meta.env.VITE_API_URL?.trim() || "";

let homepageRequest;

export async function getHomepage() {
  if (!homepageRequest) {
    homepageRequest = fetch(`${API}/api/homepage`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API fetch failed with status ${response.status}`);
        }

        return response.json();
      })
      .catch((error) => {
        homepageRequest = undefined;
        throw error;
      });
  }

  return homepageRequest;
}
