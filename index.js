const fs = require('fs');
const express = require('express');
const date = require('date-and-time')
const dotenv =require('dotenv');
dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send("API Running....")
});
  
// Creating object of current date and time 
// by using Date() 
const now  =  new Date();

//for current TimeStamp
const timeStamp = Date.now();

// Formatting the date and time by using date.format() method
const value = date.format(now,'YYYY/MM/DD HH:mm:ss');
  
// Display the result
console.log("current date and time : " + value)

//path to write Files with timeStamp
const path = `./Folder/${timeStamp}.txt`;

//route to create file in given path
app.get('/createFiles', (req, res) => {
    //to write a file
    fs.writeFile(path, ("" + value), (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Done")
    })
    //to show the response on webpage with current date and time
    res.send(`<h1>${value}</h1>`)
})

//for express to listen on port
app.listen(PORT,()=>console.log("Server listening on ",PORT))