import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";
import TaskList from "../components/Tasks/TaskList";
import TaskForm from "../components/Tasks/TaskForm";


export default function TasksPage() {
const [reload, setReload] = useState(false);
return (
<div className="app-root">
<Sidebar />
<main className="app-main">
<Header />
<section className="content">
<TaskForm onAdded={() => setReload(!reload)} />
<TaskList key={String(reload)} />
</section>
</main>
</div>
);
}