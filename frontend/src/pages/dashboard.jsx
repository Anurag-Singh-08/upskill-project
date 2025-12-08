import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";
import { getToken, isExpired, clearToken } from "../utils/tokenManager";

export default function DashboardPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();

    // ❌ No token → force login
    if (!token) {
      navigate("/login");
      return;
    }

    // ❌ Token expired → logout
    if (isExpired()) {
      clearToken();
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="app-root">
      <Sidebar />

      <main className="app-main">
        <Header />

        <section className="content">
          <h2>Welcome</h2>
          <p>Use the sidebar to navigate. This is your dashboard overview.</p>
        </section>
      </main>
    </div>
  );
}
