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

    console.log(`Image is saved to ${__dirname + path}`);

});

req.on('error', err => {
    console.log("there was an error");
    console.error(err);
});

req.end();