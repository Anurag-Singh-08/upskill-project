import { getToken } from "../utils/tokenManager";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export async function api(endpoint, { method = "GET", body = null, headers = {} } = {}) {
  const token = getToken();

  const fetchOptions = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };

  if (body != null) fetchOptions.body = JSON.stringify(body);

  const url = `${API_BASE_URL}${endpoint}`;

  const res = await fetch(url, fetchOptions);

  const text = await res.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!res.ok) {
    if (res.status === 401) {
      clearToken();
      window.location.href = "/login";
    }
    const err = new Error(data?.message || `HTTP ${res.status}`);
    err.status = res.status;
    err.body = data;
    throw err;
  }

  return data;
}
