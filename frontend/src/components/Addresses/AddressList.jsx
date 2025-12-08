import React, { useEffect, useState } from "react";
import { api } from "../../services/api"; // adjust path if needed

export default function AddressList() {
  const [addresses, setAddresses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const data = await api("/addresses", { method: "GET" });
        setAddresses(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        setError("Failed to load addresses");
      }
    };

    fetchAddresses();
  }, []);

  if (error) return <p className="error">{error}</p>;
  if (addresses.length === 0) return <p>No addresses found.</p>;

  return (
    <ul className="address-list">
      {addresses.map((a) => (
        <li key={a.id}>
          {a.street}, {a.city}, {a.state}, {a.country} - {a.postalCode}
        </li>
      ))}
    </ul>
  );
}
