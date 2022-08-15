import bodyParser = require("body-parser")
import { AppDataSource } from "./data-source"
import express = require("express");
import cors = require("cors");
import postRoutes from "./routes/PostRoutes";






AppDataSource.initialize().then(async (connection) => {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());

    const port = process.env.PORT || 6000

    app.use('/',  postRoutes)



    app.listen(port, ()=>{
        console.log(`Server is running on ${ port }`);
        
    })

}).catch(error => console.log(error))












// console.log("Inserting a new user into the database...")
// const user = new User()
// user.firstName = "Timber"
// user.lastName = "Saw"
// user.age = 25
// await AppDataSource.manager.save(user)
// console.log("Saved a new user with id: " + user.id)

// console.log("Loading users from the database...")
// const users = await AppDataSource.manager.find(User)
// console.log("Loaded users: ", users)

// console.log("Here you can setup and run express / fastify / any other framework.")
