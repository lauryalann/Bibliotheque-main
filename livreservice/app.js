// index.js
const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./util/database");
const db = require("./model/livre");
const bookRoutes = require("./route/livreRoute");

const app = express();

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the database
db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
});

// Simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Book API." });
});

// Routes for books
app.use("/api/books", bookRoutes);

// Set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
