const route=require('express').Router()
const {databasename}=require('./database')

//creating Collection
const collection=databasename.collection("Employee")

route.get ('/q1',async(req,res)=>{
    let taskone=await collection.find().toArray()
    return res.send(taskone)
})

route.get('/q2',async(req,res)=>{
    let tasktwo=await collection.find({"salary":{$gt:"30000"}}).toArray()
    return res.send(tasktwo)
})

route.get('/q3',async(req,res)=>{
    let taskthree=await collection.find({"overallExp":{$gt:"2"}}).toArray()
    return res.send(taskthree)
})

route.get('/q4',async(req,res)=>{
    let taskfour=await collection.find({"yearGrad":{$gt:"2015"},"overallExp":{$gt:"1"}}).toArray()
    return res.send(taskfour)
})

route.get('/q5',async(req,res)=>{
    let taskfive=await collection.updateMany({"salary":{$gt:"70000"}},{$set:{"salary":"60000"}})
    return res.send(taskfive)
})

route.get('/q6',async(req,res)=>{
    let tasksix=await collection.deleteMany({"lastCompany":"Y"})
    return res.send(tasksix)
})

module.exports=route


//mongodb+srv://SuprajaKurapati:<password>@cluster0.udurvsr.mongodb.net/?retryWrites=true&w=majority