// Import packages
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('emirates:server');
const package = require('./package.json');
const config = require('./config'); // get our config file
//
const portNo = '3030';
// App
const app = express();
//app.set('SUP3RS3CRET', config.secret); // secret variable

// Morgan
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes/index.routes'));
// First route sending system info (server version,...)
app.get('/sysinfo', (req, res) => {
    res.json({
        systemId: package.name,
        version: package.version,
        description: package.description,
        endpoint: '/api/v1/watchlist'
    })
});
// Starting server
app.listen(portNo);
debug(`Server is running on port: ${portNo}`);
debug('HAPPY REQUESTING!...');
