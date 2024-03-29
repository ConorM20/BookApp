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

app.get('/books/:id', function(req,res){
    res.setHeader("Content-Type","application/json");
    console.log("Getting Book with id:", req.params.id);
    Books.findById(req.params.id,(err, books)=>{
        if(err){
            console.log(`there was an error finding Book with id ${req.params.id}`, err);
            res.status(500).send(
                JSON.stringify({
                message: `unable to find Book with id provided ${req.params.id}`,
                error: err,
            }));
        }else if(Books===null){
            res.status(404).send(JSON.stringify({
                error: "Unable to find Book",
            }))
        }else{
            res.status(200).json(books)
        }
    });
});


app.post("/books", function(req, res) {
    res.setHeader("Content-Type", "application/json");
    
        creatingReview = {
        name: req.body.name || "",
        author: req.body.author || "",
        review: req.body.review || "",
        rating: req.body.rating || 0,
        own: req.body.own || false,
    };

    Books.create(creatingReview, (err,books) => {
        if (err) {
            console.log("unable to post review");
            res.status(500).json({
                message: "unable to post review",
                error: err
            })
            return;
        } else{
            res.status(201).json(books);
        }
    })
})










app.delete('/todo/:id',(req,res)=>{



    
})








module.exports = app;
