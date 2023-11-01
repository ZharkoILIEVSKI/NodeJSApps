const { EventEmitter } = require('stream');
const logEvent = require('./logEvents');

const event = require('events');

class MyEvent extends EventEmitter{};
const myEvent = new MyEvent();

myEvent.on('log', (msg) => logEvent(msg));

myEvent.emit('log', 'Log just entered!!!');
