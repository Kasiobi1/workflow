//calling node_modules
const express = require("express");
const dataBase = require("nedb");


//working with express
const app = express();
app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

//database zone
const dataStore = new dataBase({ filename: "databrase.db", autoload: true });
dataStore.loadDatabase();

//signup endpoint POST
app.post("/signup", (request, response) => {
    console.log("Received a signup request");
   const data = request.body;

//checking if user already exist
dataStore.findOne({ user: data.user, password: data.confirms}, (err, chk) => {
    if (err) {
         response.status(500).json({ message: "internal server error" });
         return
        }
    if (chk) {
         response.status(400).json({ message: "User already exist" });
         return
        }

        //creating new user
         dataStore.insert({ user:data.user, confirms:data.confirms }, (err, newUser) => {
             if (err) {
                 response.status(500).json({ message: "Internal server error" });
                 return
             }
             response.sendStatus(201)
         });
     });
 });

//login endpoint with GET
 app.get("/login", (request,response) => {
    dataStore.find({} ,(err, data) => {
        if(err) {
            response.end();
            return
        }
        {
            response.json(data);
            console.log("Sent a login request");

        }
    });
 });