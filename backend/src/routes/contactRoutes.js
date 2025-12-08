const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const ctrl = require("../controllers/contactController");

router.use(auth);

router.get("/", ctrl.listContacts);
router.post("/", ctrl.createContact);
router.get("/:id", ctrl.getContact);
router.put("/:id", ctrl.updateContact);
router.delete("/:id", ctrl.deleteContact);

module.exports = router;
