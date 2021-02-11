const express = require('express')
const products = require("./routers/products")
const cors = require("cors")
const app = express()
const port =4000

app.use(cors())

app.get('/', (req, res)=> {
    res.send("Hello World!")
})

app.use("/products", products)

app.listen(port, ()=>{
    console.log(`Example app Listening at port ${port}`)
});