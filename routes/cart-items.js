const express = require("express");
const cart = express.Router();
const items = [
    
{id: 1, product: "milk", price: 2.00, quantity: 3}, 
{id: 2, product: "bread", price: 3.00, quantity: 4}, 
{id: 3, product: "chicken breast", price: 5.99, quantity: 1}, 
{id: 4, product: "chips", price: 1.00, quantity: 10}

];

cart.get("/", (req, res) => {
    res.json({data: items});
});

cart.post("/", (req, res) => {
console.log(req.body);
});00

cart.put("/:id", (req, res) => {
console.log(req.params.id);
});

cart.delete("/:id", (req, res) => {
console.log(req.params.id);
});


module.exports = cart;