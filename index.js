import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => {
    console.log(`Listening on: ${PORT}`);
}

const handleHome= (req, res) =>{
    console.log(req); 
    res.send("hello")
}

app.get("/", handleHome);

app.listen(4000, handleListening);
