// Using Node.js create a web page to read two file names from user and append contents of first file into second file.

const fs = require('fs');

const fileToCopyFrom = process.argv[2];
const fileToPasteIn = process.argv[3];

if (fs.existsSync(fileToCopyFrom) && fs.existsSync(fileToPasteIn)) {
    fs.readFile(fileToCopyFrom, (err, data)=>{
        fs.appendFile(fileToPasteIn, data, err=>{
            if (err) {
                console.log("there was some error");
                return;
            }
            console.log(`content of ${fileToCopyFrom} appended to ${fileToPasteIn}`);
        });
    });
}
else{
    console.log("one of the file does not exists");
}