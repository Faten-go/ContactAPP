const express=require("express");
const router=express.Router();
const contact = require("../models/Contact");
const controllers=require("../controllers/contact.controllers")
//testing routing
//router.get("/",(req,res) =>{
   // res.send("hello");
//});
//post contact
//get all contact 
//get one contact by id 
//delete contact by id
//update contact by id




//@POST methode
//@desc post a contact
//@path: http://localhost:5000/api/contact/
//parms Body
router.post("/name",controllers.postContact );

//@methode GET
//@dsc GET all contacts
//@Path: http://localhost:5000/api/contact/
router.get("/", async(req, res)=>{
    try{
        const result=await Contact.find()
        res.send({response:result, message:"getting contacts sucessfully"})
    }catch (error){
        res.status(400).send({message:"can not get contacts"})

    }
})

//@methode GET
//@dsc GET one contact
//@Path: http://localhost:5000/api/contact/:id
//@Params id 
router.get("/:id",async(req, res)=>{
    try{
const result=await Contact.findOne({_id:req.params.id})
res.send({response:result, message:"contact with id successfully retrieved"});
    }catch (error){
        res.status(400).send({message:"can not get contact with this id"});

    }
});

//@methode DELETE
//@des delete one contact by id
//@Path: http://localhost:5000/api/contact/:id
//@Params id 
router.delete("/:id",async(req, res)=>{
    try{
const result=await Contact.deleteOne({_id:req.params.id});

result.n
    ?res.send({response:" user successfully deleted"})
    :res.send("there is no user with this id")
    }catch (error){
        res.send("could not be deleted");

    }
});


//@methode PUT
//@dsc UPDATE a contact by id
//@Path: http://localhost:5000/api/contact/:id
//@Params id Body
router.put("/:id",async(req, res)=>{
    try{
const result=await Contact.updateOne({_id:req.params.id},{$set:{...req.body}});
result.nModified? res.send({message:"user update"}):res.send({message:"contacr already updated"})
    
}catch (error){
        res.status(400).send({message:"there is no user with this id"});

    }
});


module.exports = router;
