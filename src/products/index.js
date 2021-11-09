import express from "express"
import {ProductModel} from "./model.js"


const productsRouter = express.Router()


productsRouter.post('/', async (req, res) => {
    
        console.log(req.body)
    const { name, price } = req.body;

    if (!name || !price) {
        res.status(400).send({ error: "name and price are required" });
        return
    }
    const product = new ProductModel({ name, price });
    await product.save();

    console.log(product)

    res.status(201).send({ product });
    }
)

productsRouter.get('/:id', async (req, res) => {
    const products = await ProductModel.find({});

    res.send(products || []);
})

export default productsRouter