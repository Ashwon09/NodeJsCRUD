const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const userPath = require("./routes/user")

dotenv.config();
mongoose
  .connect(process.env.MONGO_PASS
  )
  .then(console.log("db connection successful"))
  .catch((err) => {
    console.log(err);
  });


app.use(express.json());
app.use("/users", userPath)




app.listen(5000, () => {
  console.log("backend server is running");
});
