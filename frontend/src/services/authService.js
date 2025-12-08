import { api } from "./api";
import { setToken, clearToken } from "../utils/tokenManager";

export async function loginUser(email, password) {
  try {
    const res = await api("/auth/login", { method: "POST", body: { email, password } });
    if (res?.token) setToken(res.token);
    return res;
  } catch (err) {
    return { error: err.body?.message || err.message || "Login failed" };
  }
}

export async function registerUser(payload) {
  try {
    const res = await api("/auth/register", { method: "POST", body: payload });
    return res;
  } catch (err) {
    return { error: err.body?.message || err.message || "Registration failed" };
  }
}

export function logoutUser() {
  clearToken();
  window.location.href = "/login";
}
