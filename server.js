const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect with database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
app.use('/upload', express.static('upload'));

app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/login', require('./routes/login'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/about', require('./routes/about'));
app.use('/api/menu', require('./routes/menu'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is on port: ${PORT}`));
