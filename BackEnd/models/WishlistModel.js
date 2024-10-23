const mongoose=require('mongoose')

const WishlistModel=mongoose.Schema({
    user:{
        type:String,
        unique:true
    },
    recipes:[{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }]
})

module.exports=mongoose.model('Wishlist',WishlistModel)