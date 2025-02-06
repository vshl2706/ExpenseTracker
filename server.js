const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const userRoutes = require("./routes/userRoute");
const connectDb = require('./config/connectDb');

// config dot env file
dotenv.config();
// database call
connectDb();
// Rest object
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors()); 

// routes
// app.get('/', (req, res) => {
//     res.send("<h1>Hello From Server</h1>");
// });
// user route
app.use("/api/v1/users", userRoutes );
// transaction routes
app.use('/api/v1/transactions', require("./routes/transactionRoutes")); 

// Below two lines are added at the time of deployment
// static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// port
const PORT = 8081 || process.env.PORT;

// Listen server
app.listen(PORT, (err) => {
    if(err){
        console.log(`Port ${PORT} is in use. Trying a different port...`);
        app.listen(PORT + 1);
    }else{
        console.log(`Server running on port ${PORT}`.green)
    }
})
