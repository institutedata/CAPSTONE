const express = require("express");
const cors = require("cors"); // Import CORS middleware to enables CORS for all origins
let dbConnect = require("./dbConnect");
const userRoutes = require("./routes/userRoutes");
const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const authRoutes = require('./routes/authRoutes');


const app = express();
require("dotenv").config();

// parse requests of content-type - application/json
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});
app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/application", applicationRoutes);
app.use('/api', authRoutes);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
