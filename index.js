const express = require('express');
const path = require('path');

const app = express();

const PORT =  process.env.PORT || 5000;

// Set static folder - index
app.use(express.static(path.join(__dirname, 'public' )));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));


app.listen(PORT, () => console.log(`Server started on port ${PORT}`) );