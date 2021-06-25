const express = require('express');
const { Model } = require('mongoose');
const {store, Books} = require("./model");
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

<<<<<<< HEAD
app.post("", function(req, res) {
    res.setHeader("Content-Type", "application/json");
    
    let userReview = {
        bookName: req.body.name || "",
    }
})

=======
app.get('/books', (req, res)=>{
    res.setHeader("Content-Type","application/json");
    console.log("Getting all Books");
    Books.find({},function(err,books){
        if(err){
            console.log(`there was an error listing Books`,err);
            res.status(500).json({
                message: `unable to list Books`, error: err
            });
        }else{
            res.status(200).json(books);
        }
    
});
});
>>>>>>> d026cb27bc6c198fb1d143bec331c134e500555c




















module.exports = app;
