
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


// const fs = require("fs")
// fs.writeFileSync("text.txt","Hello this is sample file.")
// console.log("File created.")


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

// console.log("Hello")

// setTimeout(() => {
//     console.log("Task compelted")
// },3000)
// console.log("bye")




// text.js
// const fs = require("fs")
// fs.writeFileSync("text.txt","Hello this is sample file.")
// console.log("File created.")




// Math.js
// const math = require("./math")
// console.log(math.add(2,4))
// console.log(math.multi(2,4))





// const express = require("express")
// const cors =require("cors")
// const app = express()
// const tasks = [
//     {id:1,task:"Study"},
//     {id:2,task:"Revision"}

// ]
// app.get("/tasks", (req,res) => {
//     res.json(tasks)
// })
// app.listen(3000,() =>{
//     console.log("server running on port 3000")
// })







// function palceOrder(orderID,callbck){
//     console.log("Order received.Preparing order");
//     callbck();

//     setTimeout(() =>{
//         console.log("Food is read and is your delivery id is:" ,orderID);
//     },3000);
// }

// function notifyUser(){
//     console.log("Order will be ready shortly");
// }

// palceOrder(101,notifyUser)




// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req,res) =>{
//     fs.readFile("index.html",(err,data) => {
//     res.writeHead(200,{"Content-type":"text/html"});
//     res.write(data);
//     res.end();
// });
// });

// server.listen(3000 , () => {
//     console.log("Server running at http://localhost:3000/");
// });


// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req,res) =>{
//     if (req.url === "/"){
//         fs.readFile("index.html",(err,data) => {
//             res.writeHead(200,{"Content-type":"text/html"});
//             res.write(data);
//             res.end();
//         });
//     }
//     if (req.url === "/about"){
//         fs.readFile("about.html",(err,data) => {
//             res.writeHead(200,{"Content-type":"text/html"});
//             res.write(data);
//             res.end();
//         });
//     }
//     if (req.url === "/contact"){
//         fs.readFile("contact.html",(err,data) => {
//             res.writeHead(200,{"Content-type":"text/html"});
//             res.write(data);
//             res.end();
//         });
//     }
// });

// server.listen(3000 , () => {
//     console.log("Server running at http://localhost:3000/");
// });





// const http = require("http");
// const fs = require("fs");
// const querystring = require("querystring");

// let submittedData = {};

// const server = http.createServer((req, res) => {

//     if (req.method === "GET" && req.url === "/") {
//         fs.readFile("register.html", (err, data) => {
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.write(data);
//             res.end();
//         });
//     }

//     else if (req.method === "POST" && req.url === "/submit") {
//         let body = "";

//         req.on("data", chunk => {
//             body += chunk.toString();
//         });

//         req.on("end", () => {
//             submittedData = querystring.parse(body);

//             res.writeHead(302, { Location: "/result" });
//             res.end();
//         });
//     }

//     else if (req.url === "/result") {
//         res.writeHead(200, {"Content-Type": "text/html"});
//         res.write("<h2>Registration Details</h2>");
//         res.write("Name: " + submittedData.name + "<br>");
//         res.write("Email: " + submittedData.email + "<br>");
//         res.write("Course: " + submittedData.course);
//         res.end();
//     }

// });

// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/");
// });



// const http = require("http");
// const querystring = require("querystring");

// const server = http.createServer((req, res) => {

//     if (req.method === "GET") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(`
//             <h2>Registration Form</h2>
//             <form method="POST">
//                 Name: <input type="text" name="name" required><br><br>
//                 Email: <input type="email" name="email" required><br><br>
//                 Course: <input type="text" name="course" required><br><br>
//                 <input type="submit" value="Register">
//             </form>
//         `);
//         res.end();
//     }

//     else if (req.method === "POST") {
//         let body = "";

//         req.on("data", chunk => {
//             body += chunk.toString();
//         });

//         req.on("end", () => {
//             const data = querystring.parse(body);

//             res.writeHead(200, { "Content-Type": "text/html" });

//             res.write(`
//                 <h2>Registration Form</h2>
//                 <form method="POST">
//                     Name: <input type="text" name="name" required><br><br>
//                     Email: <input type="email" name="email" required><br><br>
//                     Course: <input type="text" name="course" required><br><br>
//                     <input type="submit" value="Register">
//                 </form>

//                 <h2>Submitted Details</h2>
//                 Name: ${data.name}<br>
//                 Email: ${data.email}<br>
//                 Course: ${data.course}
//             `);

//             res.end();
//         });
//     }

// });

// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/");
// });







// const express = require('express');

// const app = express();

// const PORT = 3001;

// app.get('/', (req, res) => {
//     res.send('Hello, this is a simple Express server!');
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });














// const express = require("express");
// const path = require("path");

// const app = express();

// app.use(express.static(__dirname));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

// app.get("/about", (req, res) => {
//     res.sendFile(path.join(__dirname, "about.html"));
// });

// app.get("/contact", (req, res) => {
//     res.sendFile(path.join(__dirname, "contact.html"));
// });

// app.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/");
// });
















// const express = require("express");
// const path = require("path");

// const app = express();

// app.use(express.urlencoded({ extended: true }));

// app.use(express.static(__dirname));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "register.html"));
// });

// app.post("/register", (req, res) => {
//     const { name, email, password } = req.body;

//     res.send(`
//         <h1>Registration Successful</h1>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Password:</strong> ${password}</p>
//         <br>
//         <a href="/">Go Back</a>
//     `);
// });

// app.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/");
// });