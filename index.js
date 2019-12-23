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

// Get Single Member
app.get('/api/members/:id', (req, res) => {
    const found = members.some( member => member.id === parseInt(req.params.id) )

    if (found) {
        res.send(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `Err to get the member. No member with ${req.params.id}` });
    }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`) );