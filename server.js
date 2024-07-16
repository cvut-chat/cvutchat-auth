const express = require("express");
const Routes = require("./routes/api");
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api", Routes);

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
