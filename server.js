const express = require('express');
const cors = require('cors');
const server = express();

// const userRouter = require('../users/user-router');

const strainsRouter = require('./strains/strains-router');

const helmet = require('helmet');

server.use(cors())
server.use(helmet())
server.use(express.json());
server.use('/api/strains', strainsRouter)



// server.use('/api/users', userRouter)

server.get('/', (req, res) => {
    res.send('ITS WORKING!!!')
})

module.exports = server;