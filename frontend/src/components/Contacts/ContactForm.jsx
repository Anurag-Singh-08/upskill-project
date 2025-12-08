import React, { useState } from "react";
import { api } from "../../services/api";


export default function ContactForm({ onAdded }) {
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [note, setNote] = useState("");


const submit = async () => {
const res = await api("/contacts", "POST", { contact_number: phone, contact_email: email, note });
if (res?.id) {
setPhone(""); setEmail(""); setNote("");
onAdded && onAdded();
}
};


return (
<div className="card">
<h4>Add Contact</h4>
<input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
<input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
<textarea placeholder="Note" value={note} onChange={(e) => setNote(e.target.value)} />
<button onClick={submit}>Add</button>
</div>
);
}