// const fs = require('fs');
// const fsPromises = require('fs').promises;
// const http = require('http');

//--------------------------------
// Ова е опција со 'http' модулот
//--------------------------------

// console.log("------- START -------");

// const server = http.createServer((req,res) => {
//     console.log(req.url, req.method);
// })

// const PORT = process.env.PORT || 3000;

// server.listen(PORT, console.log("Server is starting..."));


//--------------------------------
//--------------------------------



//--------------------------------
// Опција со 'express' web framework-от
//--------------------------------

const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('^/$| index(.html)?', (req,res) => {
    console.log(req.method, req.url);
    res.sendFile(path.join(__dirname,'views', 'index.html'));
})

// const but = document.getElementById('eden');
// but.addEventListener('click',function() {
//     but.innerHTML=`<p>EDEN</p>`;
// })

app.get('about|ab|a', (req,res) => {
    console.log(req.method, req.url);
    res.sendFile(path.join(__dirname,'views', 'about.html'));
})

app.get('new-page(.html)?|new|n', (req,res) => {
    console.log(req.method, req.url);
    res.sendFile(path.join(__dirname,'views', 'new-page.html'));
})

app.get('/old-page(.html)?', (req,res) => {
    console.log(req.method, req.url);
    res.redirect('/new-page.html');//redirect не работи со path.join
})

// app.get('/*', (req,res) => {
//     console.log(req.method, req.url);
//     res.sendFile(path.join(__dirname,'views', '404.html'));
// })

//ROUTER handlers

const eden = (req,res,next) =>{
    console.log('eden');
    next();
}

const dva = (req,res,next) =>{
    console.log('dva');
    next();
}

const tri = (req,res) =>{
    console.log('tri');
    res.send('Завршено');
}

app.get('/nesto(.html)?', [eden, dva, tri]);

app.listen(PORT, console.log("Server is starting..."));
