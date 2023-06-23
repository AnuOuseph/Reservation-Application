const asyncHandler = require('express-async-handler') 
const Hotel = require('../models/places')
const { createError } = require('../utils/error')

//create
const placeCreate = asyncHandler(async(req,res)=>{
   const newPlace = new Hotel(req.body)
   try{
    const savedPlace = await newPlace.save()
    res.status(200).json(savedPlace)
   }catch(err){
    res.status(500).json(err)
   }
})
//update
const placeUpdate = asyncHandler(async(req,res)=>{
    
    try{
     const updatePlace = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
     res.status(200).json(updatePlace)
    }catch(err){
     res.status(500).json(err)
    }
 })
 //delete
 const placeDelete = asyncHandler(async(req,res)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json('place deleted succesfully')
    }catch(err){
        res.status(500).json(err)
    }
 })
 //get
 const placeGet = asyncHandler(async(req,res)=>{
    try{
       const Place = await Hotel.findById(req.params.id)
        res.status(200).json(Place)
    }catch(err){
        res.status(500).json(err)
    }
 })
 //get all
 const placeGetAll = asyncHandler(async(req,res,next)=>{
    try{
       const Places = await Hotel.find()
        res.status(200).json(Places)
    }catch(err){
        next(err)
    }
 })

module.exports = {placeCreate,placeUpdate,placeDelete,placeGet,placeGetAll}