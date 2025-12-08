import React from "react";
import LoginForm from "../components/Auth/LoginForm";


export default function LoginPage() {
return (
<div className="page-center">
<div className="card">
<h2>Login</h2>
<LoginForm />
<p>
Don't have an account? <a href="/register">Register</a>
</p>
</div>
</div>
);
}