const express = require("express");
const authRoutes = require("./routes/authRoutes");
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api", authRoutes);

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
