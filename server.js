// Server setup
require('dotenv').config();
const express = require('express');
var exphbs  = require('express-handlebars');
const sessionMiddleware = require("express-session");

// Stores all session data once user is signed in
const SequelizeStore = require("connect-session-sequelize")(
    sessionMiddleware.Store
  );

var path = require('path');

const routes = require('./controllers');
const sequelize = require('./config/connection');


const app = express();
var hbs = exphbs.create({});
const port = process.env.PORT || 3000;

// Used to store session data
const sessionMiddlewareConfiguration = {
    secret: process.env.SECRET, // Key to the session
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
};

app.use(sessionMiddleware(sessionMiddlewareConfiguration));

// Register template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// sync db and server
sequelize.sync({force:false}).then(()=>{
    app.listen(port, ()=> {
        console.log('Giggle and food server started at port'+port)
    });
}).catch((err)=> {
    console.log(err);
});