/*
*   Initial project code from Udacity FrontEnd Developer Course
*   https://github.com/udacity/fend/tree/refresh-2019/projects/weather-journal-app
*/

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
const cors = require('cors');

/* Middleware */

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


/* Server Setup  */

// Determine the Port
const port = 3000;

// Spin up the server
const server = app.listen(port, listening);

// Callback function listening
function listening() {
    console.log(`Server running on localhost:${port}`);
}

/* Routes */

// GET route
app.get('/all', sendData);

function sendData(request, response) {
    response.send(projectData);
}

// POST route
app.post('/add', addData);

function addData(request, response) {
    projectData.push({ temperature: request.body.temperature,
                        date: request.body.date,
                        user: request.body.user
    });
}