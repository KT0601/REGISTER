const express = require("express");
const path = require("path");
const app = express();
const port =3000;
const hbs = require("hbs")
const collection = require("./mongodb")
const user = require("./mongodb")
app.use(express.json());
app.set("view engine","ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
        res.render("register");
    });


    app.get("/show",(req,res)=>{
        user.find({},function(err,users){
    
            if(err)console.warn(err);
        
            res.render('show', {
                moviesList: users
            })
            console.warn(users);
        
        })
        });

app.post("/signup",async(req,res)=>{


    const data={
        name1 :req.body.name1,
        Rollno: req.body.Rollno

    }

    await collection.insertMany([data])
    res.render("register")
})

app.post("/delete",async(req,res)=>{

    
    await collection.deleteMany({Rollno: req.body.Rollno})
      res.render("register")

})

app.post("/update",async(req,res)=>{

    
    await collection.updateOne({Rollno: req.body.Rollno}, {$set: {name1:req.body.name1 }})   
       res.render("register")


})


app.listen(port,()=>{
    console.log(`successfully port connected`);
})
