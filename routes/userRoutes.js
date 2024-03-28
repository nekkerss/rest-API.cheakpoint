const express =require("express")
const User = require("../models/users")
const router =express.Router()
// POST
//http://localhost:4000/api//api/user/add

router.post("/add", async(req,res)=>{
    try {
        const {name,age}=req.body
        const newuser=new User({name,age})
        const user = await newuser.save()
        res.status(201).json({msg:"user created",user:user})
    } catch (error) {
        res.status(500).send("error")
        console.log(error);
        
    }
})
//GET
//http://localhost:4000/api/user/
router.get("/",async(req,res)=>{
    try {
        const user =await User.find()
        res.satuts(200).json({user})
    } catch (error) {
        res.satuts(500).sen("error")
        console.log(error);
    }
})
//PUT
//http://localhost:4000/api/user/PUT
router.get("/:id",async(req,res)=>{
    try {
        const{id}= req.params
        const {name,age}=req.body
        const user =await User.findByIdAndUpdate(
            {_id:id},
            {$set:{name,age}},
            {new:true}
            )
        res.satuts(200).json({user})
    } catch (error) {
        res.satuts(500).sen("error")
        console.log(error);
    }
})
//delete
//http://localhost:4000/api/user/DELETE
router.get("/:id",async(req,res)=>{
    try {
        const{id}= req.params
        const user =await User.findByIdAndDelete(
            {_id:id}
            )
        res.satuts(200).json({user})
    } catch (error) {
        res.satuts(500).sen("error")
        console.log(error);
    }
})




module.exports= router