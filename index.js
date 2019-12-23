const express = require('express');
const path = require('path');
const members = require('./data/members');

const app = express();

const PORT =  process.env.PORT || 5000;

// Set static folder - index
app.use(express.static(path.join(__dirname, 'public' )));

app.get('/about', (req, res) => {
    //res.send('<h1>Welcome to Node Express project</h1>') // send plain text
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Gets all members
app.get('/api/members', (req, res) => res.json(members));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`) );