const express = require('express');
const mongoose = require('mongoose');
const BrandName = require('./model');

const app = express();

app.use(express.json)

                  
mongoose.connect('mongodb+srv://Srujan:<Srujanc12>@atlascluster.gjrriix.mongodb.net/?retryWrites=true&w=majority', {
    


    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(
    () => console.log('DB connected')
).catch(err => console.log(err))

app.post('/addbrands',async(req,res)=>{
    const{brandname}=req.body;
    try{
        const newdata = new BrandName({brandname});
        await newdata.save();
        return res.json(await BrandName.find())
    }
    catch{
        console.log(err.message);
    }
})

app.get('/getallbrands',async(req,res)=>{
    try{
        const allData= await BrandName.find();
        return res.json(allData)
    }
    catch(err){
        console.log(err.message)
    }
})

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(5050, () => console.log('Server running...'));