const express = require("express")
const app = express()
app.listen(6000, ()=> console.log("listening at 6000"))
app.use(express.static("public"))
app.use(express.json({limit: "1mb"}))


//database zone
const dataBase = require("nedb")
const dataStore = new dataBase("database.db")
dataStore.loadDatabase()
//dataStore.insert({name:"derek"})

app.get("/api", (request, response)=> {
    dataStore.find({}, (err, info) => {
        if(err){
            response.end()
            return
        }
        response.json(info)
    })
        
    
})

app.post("/api", (request, response) => {
    console.log("i got a request")
    const info = request.body
    dataStore.insert(info)
    response.json({
        username: info.userName,
        confirm: info.confirms
    })
})