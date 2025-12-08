import React, { useEffect, useState } from "react";
import { api } from "../../services/api";


export default function TaskList() {
const [tasks, setTasks] = useState([]);
useEffect(() => {
api("/tasks").then((d) => setTasks(Array.isArray(d) ? d : []));
}, []);


return (
<div>
<h3>Tasks</h3>
<ul className="list">
{tasks.map((t) => (
<li key={t.id}>{t.title} — {t.status}</li>
))}
</ul>
</div>
);
}