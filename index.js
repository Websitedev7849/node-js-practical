// Write Node.js application to create an EventEmitter which will emit an event that contains information about the application's uptime, every second.
const { EventEmitter } = require('events');
const timerEventEmitter = new EventEmitter();

let currentTime = 0;

// This will trigger the update event each passing second
setInterval(() => {
    currentTime++;
    timerEventEmitter.emit('update', currentTime);
}, 1000);

timerEventEmitter.on('update', (time) => {
    console.log('Message Received from publisher');
    console.log(`${time} seconds passed since the program started`);
});