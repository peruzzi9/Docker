const express=require('express');
const apiRoute=require('./apirouter')
const app=express();

const expressJSDocSwagger = require('express-jsdoc-swagger');
const options =  require('./swaggerOptions');
expressJSDocSwagger(app)(options);


const HOST='0.0.0.0';
const PORT=3000;

app.get('/',(req,res)=>{
    res.send({code:200,message:"Hello world"})
})

app.use('/api',apiRoute)

app.listen(PORT,HOST,()=>{
    console.log(`Server is started and listening to port : ${PORT}`)
})
