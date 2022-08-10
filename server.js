const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
    fs.readFile('data.json', (errJson, jsonData) => {
        if (errJson) throw errJson;
        let data = JSON.parse(jsonData);
        console.log(data);
        res.send(data);
        
    });
})

//https://github.com/cesarfiguereo/liveData.git

app.listen("3011", () =>{
    console.log("Server listening on port 3011");
})