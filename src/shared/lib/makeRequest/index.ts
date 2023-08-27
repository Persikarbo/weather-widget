interface requestCfg {
  url: string,
  method?: string,
  body?: any,
  type?: string
}

export async function makeRequest({ url, method = "GET", body = null, type = "json" }: requestCfg): Promise<any> {
  return new Promise((resolve, reject) => {
      fetch(url, { method, body })
          .then(res => {
              if (!res.ok) {
                  return reject(new Error("Network error"));
              }
              return resolve(type === "json" ? res.json() : res.text());
          })
  })
}