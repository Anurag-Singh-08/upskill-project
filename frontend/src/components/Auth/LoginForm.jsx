
import React, { useState } from "react";
import { loginUser } from "../../services/authService";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await loginUser(email, password);
    setLoading(false);
    if (res?.token) {
      // successful: redirect to dashboard
      window.location.href = "/dashboard";
    } else {
      setError(res?.error || res?.message || "Invalid credentials");
    }
  };

  return (
    <form onSubmit={submit} className="card" style={{ zIndex: 10 }}>
      <label>Email</label>
      <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Password</label>
      <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button type="submit" disabled={loading}>{loading ? "Logging..." : "Login"}</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}
