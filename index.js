// Create a Node.js Application that wait until the promise returns the result using await function.
let data = new Promise((res,rej)=>{
    res('this string is returned by promise')
});

async function getData() {
    let myStr = await data;
    console.log(myStr);
}

getData();