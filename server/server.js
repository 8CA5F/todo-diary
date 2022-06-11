const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const todoRoute = require('./routes/todoRoute');

const app = express();

//Connect DB
mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log('Connected successfully to MongoDB'))
    .catch((err) => console.log(err));

//Middleware
app.use(
    cors({
        origin: 'http://localhost:3000',
    })
);
app.use(express.json());
app.use(helmet());

//Routes
app.use('/api/todos', todoRoute);

app.listen(process.env.SERVER_PORT, () =>
    console.log(`Server is running on port ${process.env.SERVER_PORT}`)
);
