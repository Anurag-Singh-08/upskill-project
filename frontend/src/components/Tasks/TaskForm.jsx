import React, { useState } from "react";
import { api } from "../../services/api";


export default function TaskForm({ onAdded }) {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [due_date, setDueDate] = useState("");


const submit = async () => {
const res = await api("/tasks", "POST", { title, description, due_date });
if (res?.id) {
setTitle(""); setDescription(""); setDueDate("");
onAdded && onAdded();
}
};


return (
<div className="card">
<h4>Create Task</h4>
<input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
<textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
<input type="date" value={due_date} onChange={(e) => setDueDate(e.target.value)} />
<button onClick={submit}>Create</button>
</div>
);
}