const mongoose = require("mongoose");

function connect(callback) {

    let connectionString = `mongodb+srv://bookapp_2021:2021@cluster0.gfrfr.mongodb.net/bookdatabase?retryWrites=true&w=majority`;
    console.log("connect to db....");

    mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.log("There was an error connecting to mongo: ", err);
    });

  mongoose.connection.once("open", callback);
};

module.exports = {
    connect,
  };




