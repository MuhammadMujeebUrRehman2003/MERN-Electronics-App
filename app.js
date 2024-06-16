const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const productRoutes=require('./routes/index')
const cors=require('cors')

const app=express();


app.use(bodyparser.json());
app.use(cors());
app.use(productRoutes)
// app.get('/',(req,res) =>{
//     res.send("Hello World")
// })

mongoose.connect("mongodb://localhost:27017/Shopping",{}).then(() =>{
    console.log("Connected to Mongodb")
}).catch((err) =>{
    console.log("Error :", err)
})

const port=process.env.PORT ||5000;
// const port=5000;

app.listen(port,() =>{
   console.log(`Application is running on port ${port}`)
})