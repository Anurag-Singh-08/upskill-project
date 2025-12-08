import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";
import AddressList from "../components/Addresses/AddressList";
import AddressForm from "../components/Addresses/AddressForm";

export default function AddressesPage() {
  const [reload, setReload] = useState(false);

  return (
    <div className="app-root">
      <Sidebar />
      <main className="app-main">
        <Header />
        <section className="content">
          <h3>Addresses</h3>
          <AddressForm onAdded={() => setReload(!reload)} />
          <AddressList key={String(reload)} />
        </section>
      </main>
    </div>
  );
}
