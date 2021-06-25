const express = require('express');
const { Model } = require('mongoose');
const {store, Todo} = require("./model");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json({}));

app.use((req, res, next)=>{
    console.log("Time:", Date.now(),
     " - Method:", req.method, 
     "-Path", req.originalUrl,
      "-Body: ", req.body);
    next();
});

app.post("", function(req, res) {
    res.setHeader("Content-Type", "application/json");
    
    let userReview = {
        bookName: req.body.name || "",
    }
})





















module.exports = app;
