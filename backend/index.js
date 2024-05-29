const express = require('express');
const mongoose = require('mongoose');
const app = express()
app.use(express.json())
const Product = require('./models/products')





app.listen(3002, (req, res)=>{
    console.log('server is running at port 3002')
})

app.get('/', (req, res)=>{
    res.send("Welcome to OJAY's E-commerce website!")
})


mongoose.connect(`mongodb+srv://adekanmisamuel4:OyUaD1rdIfVTpGeD@cluster0.0hlk40h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{
    console.log('backend connected')
})

.catch(()=>{
    console.log('backend connection failed')
})