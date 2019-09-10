const express= require("express");
const morgan= require("morgan");
const mongoose=require("mongoose");

const app=express();
mongoose.connect('mongodb://localhost:27017/countries', {useNewUrlParser: true,useUnifiedTopology: true })
.then(db=>console.log('DB is connected'))
.catch(err=> console.error(err));

//Settings
app.set('port',process.env.PORT ||3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/countries',require('./routes/crud'));

//Static files
app.use(express.static(__dirname+'/public'));

//Server listener
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});