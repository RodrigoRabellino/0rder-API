const { Product } = require("../db/models/products")

const productsList = [
    { id: 0, name: "Manzana", price: 120, stock: 160, unit: "kg/s" },
    { id: 1, name: "Tomate", price: 90, stock: 50, unit: "kg/s" },
    { id: 2, name: "Remolacha", price: 500, stock: 160, unit: "kg/s" },
    { id: 3, name: "Huevos", price: 60, stock: 160, unit: "Dcna" },
    { id: 4, name: "Papa", price: 16, stock: 50, unit: "kg/s" },
    { id: 5, name: "Lechuga", price: 9, stock: 160, unit: "kg/s" },
    { id: 6, name: "Acelga", price: 120, stock: 160, unit: "kg/s" },
    { id: 7, name: "Cebolla", price: 90, stock: 50, unit: "kg/s" },
    { id: 8, name: "Espinaca", price: 500, stock: 160, unit: "kg/s" },
];

const list = async (req, res)=> {
    try {
        const productsList= await Product.find()
        res.json(productsList)
    } catch (error) {
        console.log("error", error)
        res.status(500).send("tremendo error")
    }
}

const create = async (req, res)=>{
    try {
        const product = await Product.create(req.body)
        res.json(product)
    } catch (err) {
        console.log("error", error)
        res.status(500).send("no guardo")
    }
}

module.exports = {
    list,
    create

}