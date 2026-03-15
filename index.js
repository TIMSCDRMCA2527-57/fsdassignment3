
// for(i=0;i<3;i++){
//     console.log("Hello");
// }
// const name = (fnm,lnm,callback) => {
//     console.log(`my FIrst name is ${fnm} and last Name is ${lnm} `);
//     callback();
// }

// function greet(){ console.log("Hello everyone")};

// name("Akshay","Jaiswal",greet);



// const name = (fnm, lnm, callback) => {
//     return new Promise((resolve, reject) => {
//         console.log(`My first name is ${fnm} and last name is ${lnm}`);
//         resolve(); 
//     }).then(() => {
//         callback(); 
//     });
// };

// function greet() {
//     console.log("Hello everyone");
// }

// name("Akshay", "Jaiswal", greet);

// for (let i = 0; i < 3; i++) {
//     console.log("Hello");
// }


const fs = require("fs")
fs.writeFileSync("text.txt","Hello this is sample file.")
console.log("File created.")


// const localmodule = require("./localmodule")
// localmodule.name("Akshay","Jaiswal")

// const localmath = require("./localmath")
// console.log(localmath.add(13,11))
// console.log(localmath.sub(13,11))
// console.log(localmath.multi(13,11))
// console.log(localmath.div(13,11))


// const http = require("http")

// const server = http.createServer((req,res) => {
//     res.write("Welcome")
//     res.end()
// })
// server.listen(3000,()=>{
//     console.log("server is running..")
// })