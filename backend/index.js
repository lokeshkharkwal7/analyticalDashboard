const express = require("express");
let cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// app.use( cors({
  
//   origin: ["https://analytical-dashboard-kappa.vercel.app"],
//   // origin: ["https://wizstore.vercel.app"],
 
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   // credentials: true
// }));

// importing config files
const mongoConnect = require("./connect");
mongoConnect(); // Invoke the function to connect to MongoDB

const blackCofferData = require("./routes/BlackCofferDataRoutes/blackCofferData");
// calling routes

app.use("/", blackCofferData);

// listening port
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
