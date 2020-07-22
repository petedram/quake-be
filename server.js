const express = require('express');
const helmet = require('helmet');
const server = express();

const ActivityRouter = require('./activity/activity-router')
const NukesRouter = require('./activity/nukes-router')


server.use(helmet());
server.use(express.json());
server.use('/api/activity',ActivityRouter);
server.use('/api/nukes', NukesRouter);

server.get('/', (req, res) => {
    res.status(201).json({ message: 'hello world' });
});

module.exports = server;