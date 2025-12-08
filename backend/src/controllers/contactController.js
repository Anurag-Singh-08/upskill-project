const Contact = require("../models/Contact");

async function listContacts(req, res) {
  try {
    const rows = await Contact.list(req.user.id);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

async function createContact(req, res) {
  try {
    const obj = req.body;
    if (!obj.contact_number) return res.status(400).json({ message: "contact_number required" });
    const created = await Contact.create(req.user.id, obj);
    res.json(created);
  } catch (err) {
    console.error(err);
    if (err.code === "ER_DUP_ENTRY") return res.status(409).json({ message: "Duplicate contact" });
    res.status(500).json({ message: "Server error" });
  }
}

async function getContact(req, res) {
  try {
    const id = Number(req.params.id);
    const row = await Contact.getById(id, req.user.id);
    if (!row) return res.status(404).json({ message: "Not found" });
    res.json(row);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

async function updateContact(req, res) {
  try {
    const id = Number(req.params.id);
    const updated = await Contact.update(id, req.user.id, req.body);
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

async function deleteContact(req, res) {
  try {
    const id = Number(req.params.id);
    await Contact.remove(id, req.user.id);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { listContacts, createContact, getContact, updateContact, deleteContact };
