const express = require("express");
const app = express();
port = process.env.PORT || 80;

app.get("/",(req,res)=>{
    res.send("Hello ");
    console.log("Logged in");
})

app.get("/:id",(req,res)=>{
    res.send("Hello " + req.params.id + " Welcome");
    console.log("Logged in");
})


app.listen(port,(err)=>{

});