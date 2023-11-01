const {format} = require("date-fns");
const {v4: uuid} = require("uuid");

console.log(format(new Date(), "dd-MM-yyyy\tHH:mm:ss"));
console.log(uuid());

//-----------------------------------

const events = require("events");
const myEvent = new events.EventEmitter();

const eventHandler = () => {
    console.log("Реагирање на повикување...");
};

myEvent.on('povik',eventHandler);
myEvent.emit('povik', console.log("Стартување на повик..."));

