const fs = require("fs")
fs.writeFile("messager.txt","Hello from NodeJS",(err)=> {
    if(err) throw err;
    console.log("The file has been saved!");
});
fs.readFile("messager.txt","utf-8",(err,data)=>{
    if (err) throw err;
    console.log(data);
    
})