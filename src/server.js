require("dotenv").config();
const express = require("express"),
  app = express();
// app.use(express.json());

app.get("*", (req, res) => {
  res.send("hello");
});


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`LISTENING TO ${PORT}`);
});
