//Install express server
const express = require('express');
const mainRouter = express.Router();
const apiRouter = require('./backend/router');
const path = require('path');
const mongoController = require('./backend/controllers/mongoController');
const app = express();
bodyParser = require('body-parser');
/**
 * connect to db
 */
mongoController.connect();

// Serve only the static files form the dist directory
app.use(bodyParser.json());

mainRouter.use('/', apiRouter);


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use(mainRouter);

// Start the app by listening on the default Heroku port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});