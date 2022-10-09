const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const http = require('http');
const container = require('./Utils/container');
const _ = require("lodash");
const path = require("path");
const PORT = process.env.PORT || 5000;

container.resolve(function (UserController) {
    const app = SetupExpress();
    function SetupExpress() {
        const app = express();
        const server = http.createServer(app);
        server.listen(PORT, () => {
            console.log(`Express server listening on ${PORT} port number...!`);
        });
        ConfigureExpress(app);
        // Setup Router
        const router = require('express-promise-router')();
        UserController.SetRouting(router);
        app.use(router);
    }

    function ConfigureExpress(app) {
        app.use(express.static('Public'));
        app.set('view engine', 'ejs');
        app.set('views', path.join(__dirname, '/Views'));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
    }
})
