// Create a Node.js Application create a directory and the contents of the directory.
const fs = require('fs');

fs.mkdir('./myFolder', err=>{
    console.log('Your directory is created');
    fs.writeFile('./myFolder/myFile.txt', '', function (err) {
        if (err) throw err;
        console.log('myFile.txt has been created in myFolder');
    });
});