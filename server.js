const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors())

// const userRouter = require('../users/user-router');

const strainsRouter = require('./strains/strains-router');

const helmet = require('helmet');

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  

// server.use(cors())
server.use(helmet())
server.use(express.json());


server.use('/api/strains', strainsRouter)



// server.use('/api/users', userRouter)

server.get('/', (req, res) => {
    res.send('ITS WORKING!!!')
})

module.exports = server;