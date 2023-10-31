
const { log, error } = require('console');
const os = require('os');
const path = require('path');

console.log(os.type());
console.log(os.homedir());
console.log(os.version());

console.log(__dirname);
console.log(__filename);
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

// ----------------------------------------------------------
//Врска меѓу различни фајлови, експортирање и импортирање

const math = require("./math");

console.log(math.add(10,50));
console.log(math.subtract(10,50));
console.log(math.multiply(10,50));
console.log(math.divide(10,50));

// //или може и вака

const {add, subtract, multiply, divide} = require('./math')
console.log(add(10,50));
console.log(subtract(10,50));
console.log(multiply(10,50));
console.log(divide(10,50));

// ----------------------------------------------------------

//Работа со оперативен систем

const fs = require("fs");

fs.readFile("./files/lorem.txt","utf8", (err,data)=>{
    if(err) throw(err);
    console.log(data);
});
console.log("Директно од index.js");

fs.writeFile("./files/tekstot.txt", "Еве ме мене...", (err) =>{
    if(err) throw err;
    console.log("Запишано во документот: tekstot.txt");
});

const fsPromises = require("fs").promises;
// const path = require("path");

const fileOp = async() => {
    try{
       const data = await fsPromises.readFile(path.join(__dirname,"files","./ipsum.txt"),"utf8");
       console.log(data);
       await fsPromises.appendFile("./files/tekstot.txt","Еве додаток...","utf8");
       await fsPromises.unlink("./files/lorem.txt");
       await fsPromises.writeFile("./files/smotanicata.txt","Еве уште една смотаница...","utf8")
    }
    catch(err){
        console.log(err);
    }
}
fileOp();

// --------------------------------------------------------
//Читање на stream-ови

const fs = require("fs");

const rs = fs.createReadStream("./files/ipsum.txt", {encoding: 'utf8'});

const ws = fs.createWriteStream("./files/golem.txt");

//многу брзо и ефикасно префлување на текст
rs.pipe(ws);


//------------------------------------------------

const fs = require("fs");

fs.mkdir("./newdir", (err)=>{
    if(err) throw err;
});

fs.rmdir("./newdir", (err)=>{
    if(err) throw err;
})



