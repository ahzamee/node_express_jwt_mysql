const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./app/routes');

const app = express();

app.use(express.json());

app.use(bodyParser.json({
  limit: "128000kb",
  extended: true
}));

app.use(bodyParser.urlencoded({
    limit: "128000kb",
    extended: true
}));

app.use(cors());

router.registerApplicationRoutes(app);

// Handling Errors
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

app.listen(3000,() => console.log('Server is running on port 3000'));