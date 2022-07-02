const express = require("express");

const app = express();// application from express 

const mongoose = require("mongoose")
const dotenv = require("dotenv");
const User = require('./model/user')

dotenv.config();


app.use(express.json());
/*const customMiddleware= (req, res, next)=> {
    console.log('Welcome to my middleware')
    next();
}

app.use(customMiddleware) */

app.get("/users",(req, res) =>{
console.log("First request");
console.log("second request");

let users =["bhadra","jayakrishna","perul","mathamanagalam"];
res.send({users: users});
})


app.get("/create_users", async (req, res) =>{
    console.log('Hello')
    console.log(req.body.name);
    try{
        const myuser = new User();
        console.log('jkkk ' + myuser);
        await myuser.save(req.body); 
        //const myuser = req.body.name;
        res.send(myuser)
    }
    catch(err){
        console.log('jkkk ' + err);
        res.send({message: JSON.stringify(err)})
    }
    
    
})

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_CONNECTION_STRING,
{useUnifiedTopology:true, useNewUrlParser: true},
(req, res) => {
    console.log("Connected to Database");
})


app.listen(3000,()=>{
    console.log("listening to 3000");
})
//module.exports = {mongoose};