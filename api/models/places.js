const mongoose = require('mongoose')

const hotelSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        images:{
            type:String,
           
        },
        days:{
            type:Number,
            required:true,
        },
        amount:{
            type:Number,
            required:true,
        },
        rooms:{
            type:[String],
        },
        desc:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            min:0,
            max:5,
        },
        featured:{
            type:Boolean,
            default:false,
        }
    }
)
const Hotel = mongoose.model('Hotel',hotelSchema)

module.exports= Hotel;