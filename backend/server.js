import express from 'express';
import data from './data.js'

const app = express();

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.listen(5000, () => { console.log("Connected to server on port 5000"); })