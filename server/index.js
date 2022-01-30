const express = require("express");
const mongoose = require("mongoose");

const houses = require("./routes/houses");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to house listing API");
});

app.use("/api/houses", houses);
require("dotenv").config();

const port = process.env.PORT || 3000;

mongoose
  .connect(
    "mongodb+srv://srinumaripi:Seetharam%401999@cluster0.rsidp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(port, () => console.log(`server is running ${port}`));
  })
  .catch((error) => console.log(error));

// const homes = [
//   {
//     id: 1,
//     type: "appartment",
//     des: "This is mine",
//   },
//   {
//     id: 2,
//     type: "flat",
//     des: "This is my friend flat",
//   },
// ];

// app.get("/", (req, res) => {
//   res.send("Welcome to express");
// });

// app.get("/api/listing", (req, res) => {
//   res.send(homes);
// });

// app.get("/api/listing/:id", (req, res) => {
//   const home = homes.find((home) => home.id === parseInt(req.params.id));
//   if (!home) {
//     res.status(404).send("not available");
//   }
//   res.send(home);
// });

// app.post("/api/listing", (req, res) => {
//   if (!req.body.type && !req.body.dec) {
//     return res.status(400).send("type and dec are missing");
//   }
//   const home = {
//     id: homes.length + 1,
//     type: req.body.type,
//     des: req.body.des,
//   };

//   homes.push(home);
//   res.send(home);
// });

// app.put("/api/listing/:id", (req, res) => {
//   const home = homes.find((home) => home.id === parseInt(req.params.id));
//   if (!home) {
//     res.status(404).send("not available");
//   }

//   home.type = req.body.type;
//   home.dec = req.body.dec;

//   res.send(home);
// });

// app.delete("/api/listing/:id", (req, res) => {
//   const home = homes.find((home) => home.id === parseInt(req.params.id));
//   if (!home) {
//     res.status(404).send("not available");
//   }
//   const index = homes.indexOf(home);
//   homes.splice(index, 1);
//   res.send(home);
// });
