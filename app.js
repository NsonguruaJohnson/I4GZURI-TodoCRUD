const express = require('express');

const todoRouter = require('./app/routes/todoRoute');

const app = express();

// For body request parsing
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Chat App Engine is now running',
        time: new Date(Date.now()),
        // RequestTime: new Date().toISOString(),
    });
});

app.use('/api/v1/todo', todoRouter);

module.exports = app;