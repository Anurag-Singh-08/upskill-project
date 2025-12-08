import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";
import ContactList from "../components/Contacts/ContactList";
import ContactForm from "../components/Contacts/ContactForm";


export default function ContactsPage() {
const [reload, setReload] = useState(false);
return (
<div className="app-root">
<Sidebar />
<main className="app-main">
<Header />
<section className="content">
<ContactForm onAdded={() => setReload(!reload)} />
<ContactList key={String(reload)} />
</section>
</main>
</div>
);
}