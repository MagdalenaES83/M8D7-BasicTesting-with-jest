import app from "./app.js"
import mongoose from "mongoose"
import list from "express-list-endpoints"


mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to Mongo locally ✔")
    app.listen(process.env.PORT, () => {
        console.log("Server is running on port 👀👌   " + process.env.PORT)
        console.log(list(app))
    })
})


