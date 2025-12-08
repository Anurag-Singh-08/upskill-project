
import React, { useState } from "react";
import { registerUser } from "../../services/authService";

export default function RegisterForm() {
  const [form, setForm] = useState({ first_name: "", last_name: "", email: "", password: "", phone: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    const res = await registerUser(form);
    setLoading(false);
    if (res?.id || res?.id === 0) {
      setSuccess("Registered. Redirecting to login...");
      setTimeout(() => (window.location.href = "/login"), 1000);
    } else if (res?.error || res?.message) {
      setError(res.error || res.message);
    } else {
      setError("Registration failed");
    }
  };

  return (
    <form onSubmit={submit} className="card" style={{ zIndex: 10 }}>
      <label>First name</label>
      <input required type="text" value={form.first_name} onChange={onChange("first_name")} />

      <label>Last name</label>
      <input required type="text" value={form.last_name} onChange={onChange("last_name")} />

      <label>Email</label>
      <input required type="email" value={form.email} onChange={onChange("email")} />

      <label>Phone</label>
      <input type="tel" value={form.phone} onChange={onChange("phone")} />

      <label>Password</label>
      <input required type="password" value={form.password} onChange={onChange("password")} />

      <button type="submit" disabled={loading}>{loading ? "Registering..." : "Register"}</button>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </form>
  );
}
