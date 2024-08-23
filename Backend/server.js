const express = require("express");
const mongo = require("mongoose");
const { PORT, MONGODB } = require("./config");
const { connectDB } = require("./config/database");
const userRoute = require("./Routing/UserRoute")
const app = express();
app.use(express.json());
const cors = require("cors")
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user",userRoute)


connectDB();

app.listen(PORT, err => {
  if (err) console.log(err);
  console.log(`Server running at http://localhost:${PORT}`);
});
