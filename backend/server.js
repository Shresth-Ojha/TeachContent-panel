const express = require('express'); //express has body-parser in new version
const cors = require('cors');
const mongoose = require('mongoose'); //helps connect to mongodB

require('dotenv').config(); //storing env variables in dotenv file

const app = express() //creating express server
const port = process.env.port || 5500;

app.use(cors()); //cors middleware
app.use(express.json()); //parse json cz server going to send and receive JSON

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully.")
})

const exercisesRouter = require('./routes/exercises') //API endpoints
const usersRouter = require('./routes/users')

app.use('/exercises' , exercisesRouter)
app.use('/users', usersRouter)

app.listen(port, () => { //starts listening on the port, starts the server
    console.log(`Server is running on port: ${port}`)
});