const express=require("express")
const connectDB = require("./config/connectDB")
require("dotenv").config({path:"./config/.env"})

const userRouter=require("./routes/userRoutes")


connectDB()



const app =express()





const PORT =process.env.PORT
app.use(express.json())
//Routes
app.use("/api/user",userRouter)


app.listen(PORT,err =>{
    err ? console.log(err)
    :console.log("running okey"+ PORT);
})