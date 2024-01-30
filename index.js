const express=require('express')
const app=express()
const route=require('./Route')
const cors=require('cors')
const {connection}=require ('./database')
app.use(cors({
    origin:"*"
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(route)
app.listen(5070,()=>{
    console.log("Server Running");
    connection();
    console.log("Connected to DB");
})