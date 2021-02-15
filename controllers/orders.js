const { Order } = require("../db/models/orders")

const list = async (req, res)=> {
    try {
        const ordersList= await Order.find()
        res.json(ordersList)
    } catch (error) {
        console.log("error", error)
        res.status(500).send("tremendo error")
    }
}

const create = async (req, res)=>{
    try {
        const order = await Order.create(req.body)
        res.json(order)
    } catch (err) {
        console.log("error", error)
        res.status(500).send("no creado")
    }
}

const edit = async (req, res)=>{
    try {
        
    } catch (error) {
        res.status(500).send("no editado")
    }
}

const del = async (req, res) => {
    try {
        const order = await Order.findById(req.body)
    } catch (error) {
        res.status(500).send("no editado")
    }
}

module.exports = {
    list,
    create, 
    edit,
    del
}