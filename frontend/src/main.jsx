// frontend/src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles/globals.css";

import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import DashboardPage from "./pages/dashboard";
import ContactsPage from "./pages/contacts";
import TasksPage from "./pages/tasks";
import AddressesPage from "./pages/addresses";

import { getToken, isExpired } from "./utils/tokenManager";

function Protected({ children }) {
const token = getToken();
if (!token || isExpired()) return <Navigate to="/login" replace />;
return children;
}

ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
    <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/dashboard" element={<Protected><DashboardPage /></Protected>} />
    <Route path="/contacts" element={<Protected><ContactsPage /></Protected>} />
    <Route path="/tasks" element={<Protected><TasksPage /></Protected>} />
    <Route path="/addresses" element={<Protected><AddressesPage /></Protected>} />
    <Route path="/" element={<Navigate to="/dashboard" replace />} />
    </Routes>
</BrowserRouter>
);
