const mongoose= require('mongoose');
const {Schema}=mongoose;
mongoose.set('useFindAndModify', false);

const Country= new Schema({
    country:String,
    popullation:Number,
    continent:String,
    lifeExpectancy:Number,
    purchasingPower:Number
},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports=mongoose.model('countries',Country);