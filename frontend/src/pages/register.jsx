import React from "react";
import RegisterForm from "../components/Auth/RegisterForm";


export default function RegisterPage() {
return (
<div className="page-center">
<div className="card">
<h2>Register</h2>
<RegisterForm />
<p>
Already registered? <a href="/login">Login</a>
</p>
</div>
</div>
);
}