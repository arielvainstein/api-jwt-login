const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

// Routes
const { authRoutes, homeRoutes } = require('./routes');

// Middlewares
const { verifyToken } = require('./middlewares');

const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200,
}));

// DB conection
const username = encodeURIComponent(process.env.USERNAME);
const password = encodeURIComponent(process.env.PASSWORD);
const dbname = encodeURIComponent(process.env.DBNAME);
const uri = `mongodb+srv://${username}:${password}@cluster0.wniec.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log('Database conected'))
    .catch(e => console.log('error db:', e))

app.use('/api/user', authRoutes);
app.use('/api/home', verifyToken, homeRoutes);

// Server start
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})
