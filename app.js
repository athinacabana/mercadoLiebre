const express = require('express');
const path = require("path")

const app = express();

//const publicPath = path.resolve(__dirname, "./public")

app.use("/", express.static("public"))

app.listen(3000, () => {
console.log("servidor corriendo en el puerto 3000")
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});