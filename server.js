const express = require('express');
require("dotenv").config();
const dbConnect=require("./config/connectDB");
const app = express();
// conncet DB

dbConnect();
//create route
//middleware routing body parse
app.use(express.json());
app.use("/api/contact",require("./routes/contacts"));
const PORT =process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, (err) => {
  err ? console.error(err) : console.log(`Example app listening at http://localhost:${PORT}`)
})
