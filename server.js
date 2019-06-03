const express = require('express');
const app = express();
const cors = require('cors');
const cart = require('./routes/cart-items');
const port = 4000;

app.use(cors());

app.use(express.json());
app.use("/cart-items", cart);
app.listen(port, () => console.log(`app is up and running on port: ${port}`));