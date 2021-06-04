// Create a Node.js Application to download jpg image from the Server.
const http = require('http');
const fs = require('fs');

const url = 'http://localhost:3300/';
const path = './files/copy_of_photo.jpg';


const req = http.request( url , res => {
    console.log(`statusCode: ${res.statusCode}`);

    let writeStream = fs.createWriteStream(path);

    res.on('data', d => {
        writeStream.write(d);
    });

    console.log(`Image is saved to ${path}`);

});

req.on('error', err => {
    console.log("there was an error");
    console.error(err);
});

req.end();