const User = require ("../models/User");

const router = require("express").Router();

router.post("/create", async (req,res)=>{
    const newUser = new User(req.body);
    try{
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }
    catch(err){
        res.status(err).json(err);
    }
});

router.get("/read", async (req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json(err)
    }
})

router.put("/update/:id", async (req, res)=>{
try{
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,{
            $set: req.body,
        }, 
        {new: true}//to provide updated user
    );
    res.status(200).json(updatedUser);
}
catch(err){
    res.status(500).json(err)
}
})

router.delete("/delete/:id", async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user is deleted");
    }
    catch(err){
        res.status(500).json(err)
    }
})


router.get("/read/:id", async (req,res)=>{
    try{
        const users = await User.findById(req.params.id);
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports = router