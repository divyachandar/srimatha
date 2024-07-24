const express = require("express");
const bookings = require("./data/bookings");
const dotenv=require('dotenv');
const booking = require("./data/bookings");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.send("API is running..");
});

app.get("/api/bookings", (req, res) => {
    res.json(booking);
});

app.get("/api/bookings/:id", (req, res) => {
    const booking = bookings.find((n) => n._id === req.params.id);
    res.json(booking);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
