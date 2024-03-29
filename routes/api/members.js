const express = require('express');
const router = express.Router();
const members = require('../../data/members');

// Gets all members
router.get('/', (req, res) => res.json(members));

// Get Single Member
router.get('/:id', (req, res) => {
    const found = members.some( member => member.id === parseInt(req.params.id) )

    if (found) {
        res.send(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `Err to get the member. No member with ${req.params.id}` });
    }
});

module.exports = router;