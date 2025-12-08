import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

export default function ContactList() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchContacts = async () => {
      try {
        setLoading(true);
        const data = await api("/contacts"); // ✅ endpoint must match backend
        if (isMounted) setList(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        if (isMounted) setError("Failed to load contacts");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchContacts();

    return () => { isMounted = false; };
  }, []);

  if (loading) return <div>Loading contacts...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h3>Your Contacts</h3>
      <ul className="list">
        {list.map((c) => (
          <li key={c.id}>
            {c.contact_number} — {c.contact_email}
          </li>
        ))}
      </ul>
    </div>
  );
}
