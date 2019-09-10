const express=require("express");
const router= express.Router();

const Country=require('../models/country');

router.get('/',async (req,res)=>{
    const paises=await Country.find();
    res.json(paises);
});

router.get('/:country',async (req,res)=>{
    const pais=await Country.find({"country": req.params.country });
    res.json(pais);
});

router.post('/',async (req,res)=>{
   const pais=new Country(req.body);
   await pais.save();
   console.log(pais);
   res.json({
       status:'Country saved'
   });
});

router.put('/:country',async (req,res)=>{
   await Country.findOneAndUpdate({"country": req.params.country }, {$set: req.body});
    res.json({
        status:'Country modified'
    });
 });

 router.delete('/:country',async (req,res)=>{
    await Country.findOneAndRemove({"country": req.params.country });
     res.json({
         status:'Country deleted'
     });
  });

module.exports=router;