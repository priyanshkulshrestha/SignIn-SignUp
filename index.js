require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const connection = require('./db');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.static("public"))
app.use(express.urlencoded({extended : true}))


//db connection
connection();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users",userRoutes)
app.use("/api/auth",authRoutes)

app.get("/", (req,res) => {
    res.render("index")
})

const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log(`listening on port ${port}....`);
})