import React, { useState } from "react";
import { api } from "../../services/api"; // adjust path if needed

export default function AddressForm({ onAdded }) {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await api("/addresses", {
        method: "POST",
        body: { street, city, state, country, postalCode },
      });

      // Clear form
      setStreet("");
      setCity("");
      setState("");
      setCountry("");
      setPostalCode("");

      // Trigger parent reload
      if (onAdded) onAdded();
    } catch (err) {
      console.error(err);
      setError("Failed to add address.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="address-form">
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Street"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="State"
        value={state}
        onChange={(e) => setState(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Postal Code"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Address"}
      </button>
    </form>
  );
}
