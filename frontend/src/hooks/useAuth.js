
import { useState, useEffect } from "react";
import { getToken, clearToken, isExpired } from "../utils/tokenManager";
import { api } from "../services/api";

export default function useAuth() {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    let mounted = true;
    async function load() {
    const token = getToken();
    if (!token || isExpired()) {
        clearToken();
        setLoading(false);
        return;
    }
    try {
        const res = await api("/auth/me", { method: "GET" });
        if (mounted) setUser(res?.user || null);
    } catch {
        clearToken();
        setUser(null);
    } finally {
        if (mounted) setLoading(false);
    }
    }
    load();
    return () => {
    mounted = false;
    };
}, []);

const login = async (email, password) => {
    // returns { token } or { error: "..." }
    const res = await api("/auth/login", { method: "POST", body: { email, password } }).catch((err) => ({ error: err.body?.message || err.message }));
    if (res?.token) {
    localStorage.setItem("token", res.token);
    setUser(res.user || null);
      // set expiry — tokenManager is not imported since hook shouldn't manage expiry directly
      const expiry = Date.now() + 15 * 60 * 1000;
    localStorage.setItem("token_expiry", String(expiry));
    }
    return res;
};

const logout = () => {
    clearToken();
    setUser(null);
    window.location.href = "/login";
};

return { user, loading, login, logout, isAuthenticated: !!user };
}
