
const mongoose = require("mongoose")
mongoose.set('strictQuery', true);
const url= 'mongodb://localhost/register';
mongoose.connect(url).then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log("failed to connect db");
})
const registerschema = new mongoose.Schema({
    name1:{
        type : String,
        require : true
    },
    Rollno:{
        type : String,
        require : true
    },
})

const collection =  new mongoose.model("collection1",registerschema)
module.exports=collection;



// const {MongoClient, default: mongoose} = require("mongoose")
// const url= 'mongodb://localhost/hostelers';
// mongoose.connect(url).then(()=>{

// console.log(`connection successful`);}).catch((e)=>{
//     console.log(`connection not successful`)  ;
// })




// async function getData( num)
// {
//     let result = await client.connect();
//     db= result.db(databaseName);
//     collection = db.collection('student');
//     let data = await collection.findOne({roll:num},function(error, result) {
//         if (!error) {
//           if (result) {
//             console.log("registered");
//           } else {
//             console.log("not registered");
//           }
//         } else {
//           console.log("MongoDB error");
//         }
//       });
// }
//       let num=document.getElementById('field2');
// let pass=document.getElementById('field3');
// let nam= document.getElementById('field1');
// getData(num,pass,nam);