const PROXY_URL = import.meta.env.VITE_PROXY_URL;
const PROXY_KEY = import.meta.env.VITE_PROXY_KEY;

const getParams = (query: Record<string, string | number>) => {
  let params = Object.keys(query)
    .map((key) => `${key}=${encodeURIComponent(query[key])}`)
    .join('&');
  params = `&${params}`;
  return params;
};

const get = async <T>(path: string, query?: Record<string, string | number>) => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-proxy-key': PROXY_KEY }
  };
  let params = '';
  if (query) {
    params = getParams(query);
  }
  const response = await fetch(`${PROXY_URL}?path=${path}${params}`, options);
  return response.json() as Promise<T>;
};

const post = async <T>(path: string, data: Partial<T>, query?: Record<string, string | number>) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-proxy-key': PROXY_KEY },
    body: JSON.stringify(data)
  };
  let params = '';
  if (query) {
    params = getParams(query);
  }
  const response = await fetch(`${PROXY_URL}?path=${path}${params}`, options);
  return response.json() as Promise<T>;
};

export { get, post };
