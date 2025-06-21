const express = require('express');

const app = express()
const port = process.env.port || 8080
const authRoute = require('./routes/auth-route')
const bookRoute = require('./routes/booking-route')
const CRUDroute = require('./routes/CRUD-route')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

mongoose.connect(
    "mongodb+srv://akshithaksh56:test123@plan-your-trip.7hsuik9.mongodb.net/appData",
    (err) => {
        if(err){
            console.log("Database not connected")
        }else{
            console.log("Database connected")
        }
    }
)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.use('/auth', authRoute);

app.use('/book', bookRoute)

app.use('/crud', CRUDroute)


app.get('/', (req, res) => {
    res.send("Hey World")
})

app.listen(port, () => {
    console.log("server is connected : ",port)
})