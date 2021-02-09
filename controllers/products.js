
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

const list = (req, res)=> {
    res.json(productsList)
}

module.exports = {
    list
}