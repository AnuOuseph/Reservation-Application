const asyncHandler = require('express-async-handler') 
const Hotel = require('../models/places')
const { createError } = require('../utils/error')

//create
const placeCreate = asyncHandler(async(req,res)=>{
    console.log(req.body)
   const newPlace = new Hotel(req.body)
   try{
    const savedPlace = await newPlace.save()
    res.status(200).json(savedPlace)
   }catch(err){
    next(err)
   }
})
//update
const placeUpdate = asyncHandler(async(req,res)=>{
    
    try{
     const updatePlace = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
     res.status(200).json(updatePlace)
    }catch(err){
     next(err)
    }
 })
 //delete
 const placeDelete = asyncHandler(async(req,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json('place deleted succesfully')
    }catch(err){
        next(err)
    }
 })
 //get
 const placeGet = asyncHandler(async(req,res,next)=>{
    try{
       const Place = await Hotel.findById(req.params.id)
        res.status(200).json(Place)
    }catch(err){
        next(err)
    }
 })
 //get all
 const placeGetAll = asyncHandler(async(req,res,next)=>{
    const {min, max, ...others } = req.query;
    try{
        const Places = await Hotel.find({
            ...others,
            amount:{$gt: min || 1, $lt: max || 10000},
        }).limit(req.query.limit)
    //    const Places = await Hotel.find(req.query).limit(4)
        res.status(200).json(Places)
    }catch(err){
        next(err)
    }
 })
 //city count
 const countByCity = asyncHandler(async(req,res,next)=>{
    const cities = req.query.cities.split(",")
    try{
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    }catch(err){
        next(err)
    }
 })
 //type count
 const countByType = asyncHandler(async(req,res,next)=>{
    try{
        const HotelCount = await Hotel.countDocuments({type:"Hotel"})
        const ApartmentCount = await Hotel.countDocuments({type:"Apartment"})
        const VillaCount = await Hotel.countDocuments({type:"Villa"})
        const ResortCount = await Hotel.countDocuments({type:"Resort"})
        const cabinCount = await Hotel.countDocuments({type:"Cabin"})

        res.status(200).json([
            {type:"Hotel",count:HotelCount},
            {type:"Apartment",count:ApartmentCount},
            {type:"Villa",count:VillaCount},
            {type:"Resort",count:ResortCount},
            {type:"Cabin",count:cabinCount}
        ])
    }catch(err){
        next(err)
    }
 })

module.exports = {placeCreate,placeUpdate,placeDelete,placeGet,placeGetAll,countByCity,countByType}