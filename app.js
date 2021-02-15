const express = require('express')
const products = require("./routers/products")
const orders =require("./routers/orders")
const cors = require("cors")
const bodyParser = require("body-parser")
const { connectDb } = require("./db/connection")

const app = express()
const port =4000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res)=> {
    res.send("Hello World!")
})

app.use("/products", products)
app.use("/orders", orders)

app.listen(port, ()=>{
    console.log(`Example app Listening at port ${port}`)
});

connectDb();