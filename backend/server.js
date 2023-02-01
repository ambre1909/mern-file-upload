const express = require('express')
const cors = require("cors")
const { connect } = require('./config/db')
require("dotenv").config({ path: ".env" })
connect()  //means db

const app = express()
app.use(express.json())
app.use(express.static("public"))
app.use(cors())
app.use("/user", require("./routes/userRoutes"))
app.use("/doc", require("./routes/docRoutes"))

app.listen(process.env.PORT, console.log("http://localhost:5000"))















