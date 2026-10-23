import express from "express";
const app=express();
const port=3000;
app.get("/",(req,res) => {
    console.log(req.raw);
    res.send("<h1>Hello</h1>");
});
app.get("/about",(req,res) => {
    res.send("<h1> About</h1><p> This is a simple express server</p>");
});
app.get("/contact",(req,res) => {
    res.send("<h1> Contact</h1>");
})
app.listen(port,{},()=>{
    console.log(`server is running on port ${port}.`);
})
