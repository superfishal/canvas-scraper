const express = require('express');
const app = express();
const routes = require('./routes');

const port = 3001



// Static directory
app.use(express.static('public'));
//allows the app to use JSON data
app.use(express.json())
//This middleware will parse that string into an object containing key value pairs
app.use(express.urlencoded({ limit: '100mb', extended: true }));

// WORKING ON MODULARIZING ROUTES
app.use("/", routes)

app.listen(port, () => console.log(`server listening on port: http://localhost:${port}`));
