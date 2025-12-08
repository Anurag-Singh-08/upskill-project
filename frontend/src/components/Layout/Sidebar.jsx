import React from "react";
import { logoutUser } from "../../services/authService";


export default function Sidebar() {
return (
<aside className="app-sidebar">
<nav>
<a href="/dashboard">Dashboard</a>
<a href="/contacts">Contacts</a>
<a href="/addresses">Addresses</a>
<a href="/tasks">Tasks</a>
</nav>
<button onClick={logoutUser} className="logout">Logout</button>
</aside>
);
}