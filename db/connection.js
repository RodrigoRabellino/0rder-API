const mongoose =require("mongoose")


function connectDb () {
    mongoose.connect("mongodb+srv://dev_app:3fSlAAl4Ku6kgkBk@dev.drq2z.mongodb.net/dev?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function(){
        console.log("estas re conectado ñieri")
    })
}

module.exports = { connectDb }