interface requestCfg {
  url: string,
  method?: string,
  body?: any,
  type?: string
}

export async function makeRequest({ url, method = "GET", body = null, type = "json" }: requestCfg): Promise<any> {
  return fetch(url, { method, body })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(new Error("Network error"));
      }
      return type === "json" ? res.json() : res.text();
    })
    .catch(error => {
      console.error("Fetching failed:", error);
    })
}