const { EventEmitter } = require('stream');
const logEvent = require('./logEvents');
const fs = require('fs');
const event = require('events');
const path = require('path');

console.log('----START----');
console.log(__dirname);

fs.mkdirSync(path.join(__dirname,'logs'));
fs.writeFileSync(path.join(__dirname,'logs','eventLogs.txt'),'PROBA TEST\n');

class MyEvent extends EventEmitter{};
const myEvent = new MyEvent();

myEvent.on('log', (msg) => {
    logEvent(msg);
    console.log('Presretnuvanje...')
});

myEvent.emit('log', 'Log just entered!!!');


