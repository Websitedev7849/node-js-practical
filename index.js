//  Create a Node.js Application that performs following operations onBuffer data. a. Concat b. Compare c. Copy

var buf1 = Buffer.from('a');
var buf2 = Buffer.from('b');
var buf3 = Buffer.from('c');
var arr = [buf1, buf2, buf3];

var buf = Buffer.concat(arr);
console.log("this is string is concated from antother buffer", buf.toString());

var buffer1 = Buffer.from('ABC');
var buffer2 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);

console.log("the following result is produced through .compare method");
if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
} else if(result === 0) {
   console.log(buffer1 +" is same as " + buffer2);
} else {
   console.log(buffer1 +" comes after " + buffer2);
}


console.log("the following result is copied through .copy method");
buffer1 = Buffer.from('ABC');
buffer2 = Buffer.from('DEF');
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());