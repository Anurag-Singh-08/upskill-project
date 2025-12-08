require("dotenv").config();
const app = require("./app");
const { initDB } = require("./config/database");

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    await initDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

start();
