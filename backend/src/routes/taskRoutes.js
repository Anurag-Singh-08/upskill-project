const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const ctrl = require("../controllers/taskController");

router.use(auth);

router.get("/", ctrl.listTasks);
router.post("/", ctrl.createTask);
router.get("/:id", ctrl.getTask);
router.put("/:id", ctrl.updateTask);
router.delete("/:id", ctrl.deleteTask);

module.exports = router;
