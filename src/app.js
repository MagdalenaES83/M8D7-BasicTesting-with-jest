import express from "express";
import cors from "cors";
import productsRouter from "./products/index.js";

const app = express();

app.use(cors())
app.use(express.json())

app.use("/products", productsRouter)
app.get("/test", (req, res) => {
    res.status(200).send({ message: "Test success" })
})



export default app